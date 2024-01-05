import React, { useCallback } from "react";
import { Divider } from "./Divider.component";
import { CheckBox } from "./CheckBox.component";
import { RadioButton } from "./RadioButton.component";
import { combineClassNames } from "common/utils/className";

export type MenuProps<TOption, TOptionKey extends string | number> = {
  shown: boolean;
  onClickOutside?: () => any;
  onItemClick?: (
    key: TOptionKey,
    option: TOption,
    newIsSelected: boolean,
  ) => any;
  activatingElementRef?: React.RefObject<HTMLButtonElement | null>;
  options?: TOption[];
  keyGetter: (option: TOption) => TOptionKey;
  isSelectedGetter?: (option: TOption) => boolean;
  itemRenderer: (option: TOption) => React.ReactElement;
  useRadios?: boolean;
};

export function Menu<TOption, TOptionKey extends string | number>({
  shown = false,
  onClickOutside,
  activatingElementRef,
  options = [],
  itemRenderer,
  keyGetter,
  onItemClick,
  isSelectedGetter = () => false,
  useRadios = false,
}: MenuProps<TOption, TOptionKey>) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  //#region Prevent scrolling
  React.useEffect(() => {
    if (shown) {
      let timeoutId = setTimeout(() => {
        listRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 50);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [shown]);
  //#endregion

  //#region Handle click outside
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        shown &&
        !wrapperRef.current?.contains(event.target as any) &&
        !activatingElementRef?.current?.contains(event.target as any)
      ) {
        onClickOutside?.();
        event.preventDefault();
        event.stopPropagation();
      }
    },
    [shown, onClickOutside, activatingElementRef],
  );

  React.useEffect(() => {
    if (wrapperRef.current && shown) {
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [shown, handleClickOutside]);
  //#endregion

  const renderedListItems = React.useMemo(() => {
    return (
      <>
        {options.map((option, index) => {
          const key = keyGetter(option);
          const isSelected = isSelectedGetter(option);

          return (
            <div key={key}>
              {!!index && <Divider className="w-full" />}
              <li
                className="flex px-4 py-1 justify-start align-middle cursor-pointer transition-filter duration-300 hover:brightness-[108%]"
                onClick={() => onItemClick?.(key, option, !isSelected)}>
                {useRadios ? (
                  <RadioButton
                    className="mr-2"
                    checked={isSelected}
                  />
                ) : (
                  <CheckBox
                    className="mr-2"
                    checked={isSelected}
                  />
                )}{" "}
                {itemRenderer(option)}
              </li>
            </div>
          );
        })}
      </>
    );
  }, [
    options,
    keyGetter,
    isSelectedGetter,
    useRadios,
    itemRenderer,
    onItemClick,
  ]);

  return (
    <div
      className="relative m-0"
      ref={wrapperRef}>
      <div
        ref={listRef}
        className={combineClassNames(
          "absolute neumorphism-5 mt-2 ml-1 z-10 py-3 rounded-md",
          "max-h-72 overflow-scroll",
          [shown, "fade-in", "fade-out"],
        )}>
        <ul>{renderedListItems}</ul>
      </div>
    </div>
  );
}

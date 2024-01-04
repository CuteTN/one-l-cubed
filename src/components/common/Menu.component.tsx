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
  itemRenderer: (option: TOption) => React.ReactElement;
  selectedKeys?: Iterable<TOptionKey>;
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
  selectedKeys,
  useRadios = false,
}: MenuProps<TOption, TOptionKey>) {
  const ref = React.useRef<HTMLDivElement>(null);

  const selectedKeysSet = React.useMemo(() => {
    return new Set(selectedKeys);
  }, [selectedKeys]);

  //#region Prevent scrolling
  React.useEffect(() => {
    if (shown) {
      const x = window.scrollX;
      const y = window.scrollY;
      const revert = window.onscroll;
      window.onscroll = function () {
        window.scrollTo(x, y);
      };

      return () => {
        window.onscroll = revert;
      };
    }
  }, [shown]);
  //#endregion

  //#region Handle click outside
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        shown &&
        !ref.current?.contains(event.target as any) &&
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
    if (ref.current && shown) {
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
          const isSelected = selectedKeysSet.has(key);

          return (
            <div key={key}>
              {!!index && <Divider className="w-full" />}
              <li
                className="flex px-4 py-2 justify-start align-middle cursor-pointer"
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
  }, [options, keyGetter, selectedKeysSet, useRadios, itemRenderer, onItemClick]);

  return (
    <div
      className="relative m-0"
      ref={ref}>
      <div
        className={combineClassNames(
          "absolute neumorphism-4 mt-3 ml-1 z-10 py-3 rounded-md",
          "max-h-72 overflow-scroll",
          [shown, "fade-in", "fade-out"],
        )}>
        <ul>{renderedListItems}</ul>
      </div>
    </div>
  );
}

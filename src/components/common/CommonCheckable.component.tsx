import React from "react";
import { combineClassNames } from "../../common/utils/className";

export type CommonCheckableProps = {
  checked?: boolean;
  className?: string;
  label?: string;
  disabled?: boolean;
  boxSize?: number;
  onClick?: (toggledChecked: boolean) => any;
  type: "checkbox" | "radio";
  checker?: React.ReactNode;
};

export function CommonCheckable({
  checked = false,
  className = "",
  label = "",
  disabled = false,
  boxSize = 24,
  onClick,
  type,
  checker,
}: CommonCheckableProps) {
  const componentId = React.useId();
  const checkableId = `neumorphism-${type}-${componentId}`;

  const handleToggle = React.useCallback(() => {
    if (disabled) return;
    onClick?.(!checked);
  }, [onClick, checked, disabled]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === " " || event.code === "Space") {
        handleToggle();
        event.stopPropagation();
      }
    },
    [handleToggle],
  );

  const handleLabelClick = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      handleToggle();
    },
    [handleToggle],
  );

  return (
    <div
      className={combineClassNames(
        "neumorphism-checkable-container",
        "inline-flex",
        "relative",
        [!disabled, "transition-filter duration-300 hover:brightness-[108%]"],
        [!disabled, "cursor-pointer"],
        className,
      )}>
      <input
        id={checkableId}
        type={type}
        className="hidden"
        checked={checked}
        disabled={disabled}
        onChange={handleToggle}
      />

      <div
        className={combineClassNames(
          "neumorphism-checkable-ripple control blur-[1px] absolute inline-flex rounded-full neumorphism-2 text-center justify-center",
          [checked, "neumorphism-checkable-ripple-animation", "hidden"],
        )}
        style={{ width: boxSize, height: boxSize }}></div>

      <div
        className={combineClassNames(
          "control",
          "relative",
          "neumorphism-checkable-dummy",
          [type === "checkbox", "rounded-md", "rounded-full"],
          "text-center",
          "justify-center",
          "select-none",
          "text-primary",
          [disabled, "div-disabled"],
          [
            checked,
            "neumorphism-checkable-dummy-checked-animation",
            "neumorphism-inset-3",
          ],
        )}
        tabIndex={0}
        style={{
          width: boxSize,
          height: boxSize,
          minWidth: boxSize,
          minHeight: boxSize,
        }}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}>
        <span className={checked ? "" : "opacity-50"}>{checker}</span>
      </div>

      <label
        className={combineClassNames([!disabled, "cursor-pointer"], "ml-2")}
        htmlFor={checkableId}
        onClick={handleLabelClick}>
        {label}
      </label>
    </div>
  );
}

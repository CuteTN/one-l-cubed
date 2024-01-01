import React from "react";
import { combineClassNames } from "../../common/utils/className";

export type CheckBoxProps = {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  boxSize?: number;
  onClick?: (toggledChecked: boolean) => any;
};

export function CheckBox({
  checked = false,
  label = "",
  disabled = false,
  boxSize = 24,
  onClick,
}: CheckBoxProps) {
  const componentId = React.useId();
  const checkBoxId = `neumorphism-checkbox-${componentId}`;

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

  return (
    <div
      className={combineClassNames(
        "neumorphism-checkbox-container",
        "inline-flex",
        "relative",
        [!disabled, "cursor-pointer"],
      )}>
      <input
        id={checkBoxId}
        type="checkbox"
        className="hidden"
        checked={checked}
        disabled={disabled}
        onChange={handleToggle}
      />

      <div
        className={combineClassNames(
          "neumorphism-checkbox-ripple control blur-[1px] absolute inline-flex rounded-full neumorphism-2 text-center justify-center",
          [checked, "neumorphism-checkbox-ripple-animation", "hidden"],
        )}
        style={{ width: boxSize, height: boxSize }}></div>

      <div
        className={combineClassNames(
          "control",
          "relative",
          "neumorphism-checkbox-dummy",
          "rounded-md",
          "text-center",
          "justify-center",
          "select-none",
          "text-primary",
          [disabled, "div-disabled"],
          [
            checked,
            "neumorphism-checkbox-dummy-checked-animation",
            "neumorphism-inset-3 !text-opacity-30",
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
        ✔
      </div>

      <label
        className={combineClassNames([!disabled, "cursor-pointer"], "ml-2")}
        htmlFor={checkBoxId}>
        {label}
      </label>
    </div>
  );
}

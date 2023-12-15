import React from "react";
import { combineClassNames } from "../../common/utils/className";

export type InputProps = {
  className?: string;
  placeholder?: string;
  leftComponent?: React.ReactNode;
  disabled?: boolean;
};

export function TextBox({
  className = "",
  placeholder = "",
  disabled = false,
  leftComponent,
}: InputProps) {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  return (
    <div
      className={combineClassNames(
        "control",
        "min-h-[3rem]",
        "neumorphism-input-text-wrapper",
        [isFocused, "neumorphism-inset-2", "neumorphism-inset-5"],
        "rounded-lg",
        "inline-flex",
        "overflow-hidden",
        className,
        [disabled, "div-disabled"],
      )}>
      <div className="flex ml-4 mr-4 gap-2 flex-grow overflow-ellipsis items-center justify-center">
        {leftComponent}
        <input
          className="control flex-glow text-ellipsis"
          type="text"
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

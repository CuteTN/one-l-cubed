import React from "react";
import { combineClassNames } from "../../common/utils/className";

export type InputContainerProps = {
  className?: string;
  leftComponent?: React.ReactNode;
  inputProps?: Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onFocus" | "onBlur"
  >;
};

export function InputContainer({
  className = "",
  leftComponent,
  inputProps = {},
}: InputContainerProps) {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const { disabled } = inputProps;

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
        [!!disabled, "div-disabled"],
      )}>
      <div className="flex ml-4 mr-4 gap-2 flex-grow overflow-ellipsis items-center justify-center">
        {leftComponent}
        <input
          {...inputProps}
          className={combineClassNames(
            "control flex-glow text-ellipsis",
            inputProps?.className,
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
}

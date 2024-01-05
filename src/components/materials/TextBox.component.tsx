import React from "react";
import {
  InputContainer,
  InputContainerProps,
} from "./InputContainer.component";

export type TextBoxProps = {
  className?: string;
  placeholder?: string;
  leftComponent?: React.ReactNode;
  disabled?: boolean;
};

export function TextBox({
  className = "",
  placeholder = "",
  leftComponent,
  disabled,
}: TextBoxProps) {
  const inputProps = React.useMemo<InputContainerProps["inputProps"]>(
    () => ({
      type: "text",
      role: "textbox",
      placeholder,
      disabled,
    }),
    [placeholder, disabled],
  );

  return (
    <InputContainer
      className={className}
      leftComponent={leftComponent}
      inputProps={inputProps}
    />
  );
}

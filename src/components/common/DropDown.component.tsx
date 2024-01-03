import React from "react";
import {
  InputContainer,
  InputContainerProps,
} from "./InputContainer.component";

export type DropDownProps = {
  className?: string;
  placeholder?: string;
  leftComponent?: React.ReactNode;
  disabled?: boolean;
};

export function DropDown({
  className = "",
  placeholder = "",
  leftComponent,
  disabled,
}: DropDownProps) {
  const inputProps = React.useMemo<InputContainerProps["inputProps"]>(
    () => ({
      type: "text",
      role: "listbox",
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

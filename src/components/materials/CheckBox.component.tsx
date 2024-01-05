import { CommonCheckable } from "./CommonCheckable.component";

export type CheckBoxProps = {
  checked?: boolean;
  className?: string;
  label?: string;
  disabled?: boolean;
  boxSize?: number;
  onClick?: (toggledChecked: boolean) => any;
};

export function CheckBox({
  checked = false,
  className = "",
  label = "",
  disabled = false,
  boxSize = 24,
  onClick,
}: CheckBoxProps) {
  return (
    <CommonCheckable
      className={className}
      type="checkbox"
      boxSize={boxSize}
      checked={checked}
      onClick={onClick}
      disabled={disabled}
      label={label}
      checker="✔"
    />
  );
}

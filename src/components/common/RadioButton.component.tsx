import { CommonCheckable } from "./CommonCheckable.component";

export type RadioButtonProps = {
  checked?: boolean;
  className?: string;
  label?: string;
  disabled?: boolean;
  boxSize?: number;
  onClick?: (toggledChecked: boolean) => any;
};

export function RadioButton({
  checked = false,
  className = "",
  label = "",
  disabled = false,
  boxSize = 24,
  onClick,
}: RadioButtonProps) {
  return (
    <CommonCheckable
      className={className}
      type="radio"
      boxSize={boxSize}
      checked={checked}
      onClick={onClick}
      disabled={disabled}
      label={label}
      checker={checked? "⬤" : "⭘"}
    />
  );
}

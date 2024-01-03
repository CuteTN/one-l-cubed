import React from "react";

export type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
};

export function Button({
  className = "",
  children,
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`control min-h-[3rem] neumorphism-6 p-3 rounded-lg flex align-middle justify-center ${className}`}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  );
}

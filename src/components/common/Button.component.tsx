import React from "react";

export type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
};

export function Button({
  className = "",
  children,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`control min-h-[3rem] neumorphism-5 p-3 rounded-lg flex align-middle justify-center ${className}`}
      disabled={disabled}>
      {children}
    </button>
  );
}

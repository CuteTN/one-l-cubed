import React from "react";

export type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = "", children, disabled = false, onClick }: ButtonProps,
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={`control min-h-[3rem] neumorphism-6 p-3 rounded-lg flex align-middle justify-center ${className}`}
        disabled={disabled}
        aria-disabled={disabled}
        onClick={onClick}>
        {children}
      </button>
    );
  },
);

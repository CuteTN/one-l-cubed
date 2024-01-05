import React from "react";
import { combineClassNames } from "../../common/utils/className";

export type FrameProps = {
  children?: React.ReactNode;
  className?: string;
  margin?: number | string;
  concave?: boolean;
};

export function Box({ children, className = "", concave = false }: FrameProps) {
  return (
    <div
      className={combineClassNames(
        [concave, "neumorphism-inset-2", "neumorphism-3"],
        className,
      )}>
      {children}
    </div>
  );
}

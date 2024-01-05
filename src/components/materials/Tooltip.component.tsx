import React from "react";
import { combineClassNames } from "../../common/utils/className";

export type TooltipProps = {
  content?: string;
  children: React.ReactNode;
  maxWidth?: number | string;
  position?: "top" | "bottom" | "left" | "right";
  circleHitBox?: boolean;
};

export function Tooltip({
  content,
  children,
  maxWidth,
  position = "top",
  circleHitBox = false,
}: TooltipProps) {
  const tooltipPositionClass = React.useMemo<string>(() => {
    switch (position) {
      case "bottom":
        return "tooltip-bottom";
      case "top":
        return "tooltip-top";
      case "left":
        return "tooltip-left";
      case "right":
        return "tooltip-right";
      default:
        return "";
    }
  }, [position]);

  return (
    <div
      className={combineClassNames(
        "neumorphism-tooltip",
        "relative",
        "inline-block",
        [circleHitBox, "rounded-full"],
      )}>
      {children}
      <div
        className={`neumorphism-tooltip-text neumorphism-5 pt-3 pb-3 pl-5 pr-5 absolute rounded-full z-20 text-center ${tooltipPositionClass}`}
        style={{
          maxWidth,
        }}>
        {content}
      </div>
    </div>
  );
}

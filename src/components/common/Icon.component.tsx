import React from "react";
import { allIcons } from "./icons";
import { combineClassNames } from "common/utils/className";

export type IconProps = {
  className?: string;
  iconName: keyof typeof allIcons;
  size?: number;
};

export function Icon({ className = "", iconName, size }: IconProps) {
  const Icon = React.useMemo(() => {
    return allIcons[iconName].component;
  }, [iconName]);

  return (
    <Icon
      className={combineClassNames("stroke-primary", className)}
      width={size}
      height={size}
    />
  );
}

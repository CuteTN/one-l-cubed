import React from "react";
// import MaterialIcon from "material-icons-react";
import { convertUppercaseToSnakeCase } from "../../common/utils/strings.utils";

export type IconProps = {
  className?: string;
  /**
   * Reference: https://mui.com/material-ui/material-icons/
   */
  iconName: string;
  size?: number;
  color?: string;
};

// TODO: Rework on icons
export function Icon({
  className = "",
  iconName,
  size = 24,
  color = "black",
}: IconProps) {
  const adjustedIconName = React.useMemo(() => {
    return convertUppercaseToSnakeCase(iconName);
  }, [iconName]);

  return (
    <div
      className={`flex flex-row overflow-hidden ${className}`}
      style={{
        maxHeight: size,
        maxWidth: size,
      }}>
      <div className="inline-block mt-1">
        {/* <MaterialIcon
          icon={adjustedIconName}
          size={size}
          color={color}
        /> */}
      </div>
    </div>
  );
}

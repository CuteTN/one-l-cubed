import { combineClassNames } from "common/utils/className";

export type DividerProps = {
  className?: string;
};

export function Divider({ className = "" }: DividerProps) {
  return (
    <div
      className={combineClassNames(
        "neumorphism-1 h-[1px] my-1 rounded-md",
        className,
      )}></div>
  );
}

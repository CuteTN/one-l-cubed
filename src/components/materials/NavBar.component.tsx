import React from "react";

export type NavBarProps = {
  children?: React.ReactNode;
};

export function NavBar({ children }: NavBarProps) {
  return (
    <div className="neumorphism-6 sticky top-0 z-10 w-full flex">
      <div className="neumorphism-2 top-0 w-full mb-1 flex">
        {children}
      </div>
    </div>
  );
}

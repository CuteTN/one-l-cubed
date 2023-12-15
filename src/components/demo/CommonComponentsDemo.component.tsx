import React from "react";
import { AppBar } from "../common/AppBar.component";
import { Button } from "../common/Button.component";
import { CheckBox } from "../common/CheckBox.component";
import { Icon } from "../common/Icon.component";
import { TextBox } from "../common/TextBox.component";
import { Tooltip } from "../common/Tooltip.component";

export function CommonComponentsDemo() {
  const [cbxChecked, setCbxChecked] = React.useState(false);

  return (
    <div>
      <AppBar>
        <div className="flex h-12 text-center justify-center items-center w-full">
          Smoke weed everyday
        </div>
      </AppBar>
      <div className="m-7">
        <Tooltip
          content="tooltip thingy how about a long freaking tooltip"
          position="right">
          {/* <Tooltip content="tooltip thingy" > */}
          <TextBox
            placeholder="Some placeholder"
            leftComponent={<Icon iconName="search" />}
          />
        </Tooltip>
      </div>
      <div className="m-7">
        <CheckBox
          checked={cbxChecked}
          onClick={(value) => setCbxChecked(value)}
          label="checkable check check"
        />
      </div>
      <div className="m-7">
        <CheckBox
          checked={cbxChecked}
          onClick={(value) => setCbxChecked(value)}
          label="checkable check check"
        />
      </div>{" "}
      <div className="m-7">
        <CheckBox
          checked={cbxChecked}
          onClick={(value) => setCbxChecked(value)}
          label="checkable check check"
          disabled
        />
      </div>
      <div className="m-7 ml-28">
        <Tooltip
          content="tooltip thingy"
          circleHitBox
          position="top">
          <div className="w-96 h-96 rounded-full bg-blue-600"></div>
        </Tooltip>
      </div>
      {Array(10)
        .fill(0)
        .map((_, i) => {
          return (
            <Button
              key={i}
              className="m-7"
              disabled={i % 2 === 0}>
              <Icon
                iconName="Album"
                className="mr-2"
              />
              Let's go
            </Button>
          );
        })}
    </div>
  );
}

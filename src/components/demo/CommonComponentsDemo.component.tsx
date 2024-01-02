import React from "react";
import { NavBar } from "../common/AppBar.component";
import { Button } from "../common/Button.component";
import { CheckBox } from "../common/CheckBox.component";
import { Icon } from "../common/Icon.component";
import { TextBox } from "../common/TextBox.component";
import { Tooltip } from "../common/Tooltip.component";
import { Box } from "../common/Frame.component";

export function CommonComponentsDemo() {
  const [cbxChecked, setCbxChecked] = React.useState(false);

  return (
    <div>
      <NavBar>
        <div className="flex h-12 text-center justify-center items-center w-full wtf">
          Smoke weed everyday
        </div>
      </NavBar>
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
            <Box className="p-2 rounded-md">
            <Box className="w-80 h-20 rounded-md" concave></Box>
            </Box>
        </Tooltip>
      </div>
      {Array(5)
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

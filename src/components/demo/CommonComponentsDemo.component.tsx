import React from "react";
import { NavBar } from "../common/AppBar.component";
import { Button } from "../common/Button.component";
import { CheckBox } from "../common/CheckBox.component";
import { Icon } from "../common/Icon.component";
import { TextBox } from "../common/TextBox.component";
import { Tooltip } from "../common/Tooltip.component";
import { Box } from "../common/Frame.component";
import { DropDown } from "components/common/DropDown.component";

export function CommonComponentsDemo() {
  const [cbxChecked, setCbxChecked] = React.useState(false);

  return (
    <Box className="m-20 rounded-lg pt-3">
      <div className="m-7">
        <DropDown></DropDown>
      </div>
      <div className="m-7">
        <Tooltip
          content="tooltip thingy how about a long freaking tooltip"
          position="right">
          <TextBox
            placeholder="Some placeholder"
            leftComponent={
              <Icon
                iconName="search"
                className="w-5 h-5"
              />
            }
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
            <Box
              className="w-80 h-20 rounded-md"
              concave></Box>
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
                iconName="dark"
                className="w-5 h-5 mr-3"
              />
              Let's go
            </Button>
          );
        })}
    </Box>
  );
}

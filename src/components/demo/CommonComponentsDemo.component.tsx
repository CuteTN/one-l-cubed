import React from "react";
import { Button } from "../common/Button.component";
import { CheckBox } from "../common/CheckBox.component";
import { Icon } from "../common/Icon.component";
import { TextBox } from "../common/TextBox.component";
import { Tooltip } from "../common/Tooltip.component";
import { Box } from "../common/Frame.component";
import { DropDown } from "components/common/DropDown.component";
import { Menu } from "components/common/Menu.component";
import { RadioButton } from "components/common/RadioButton.component";

export function CommonComponentsDemo() {
  const menuCheckboxButtonRef = React.useRef<HTMLButtonElement>(null);
  const menuRadioButtonRef = React.useRef<HTMLButtonElement>(null);
  const [cbxChecked, setCbxChecked] = React.useState(false);
  const [isMenuCheckboxShown, setIsMenuCheckboxShown] = React.useState(false);
  const [isMenuRadioShown, setIsMenuRadioShown] = React.useState(false);
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([
    "id-1",
  ]);
  const [menuOptions, setMenuOptions] = React.useState<
    { id: string; name: string }[]
  >([
    { id: "id-1", name: "One" },
    { id: "id-2", name: "Two" },
    { id: "id-3", name: "Three" },
    { id: "id-4", name: "Four" },
    { id: "id-5", name: "Five" },
    { id: "id-6", name: "Six" },
    { id: "id-7", name: "Seven" },
    { id: "id-8", name: "Eight" },
    { id: "id-9", name: "Nine" },
  ]);
  const getKeyFromMenuOption = React.useCallback(
    (option: { id: string; name: string }) => {
      return option.id;
    },
    [],
  );
  const menuOptionsRenderer = React.useCallback(
    (option: { id: string; name: string }) => {
      return <div>[ {option.name} ]</div>;
    },
    [],
  );
  const handleSelectItem = React.useCallback(
    (key: string, _option: any, newIsSelected: boolean) => {
      if (newIsSelected) {
        setSelectedOptions([key]);
      }
    },
    [],
  );
  const checkOptionSelected = React.useCallback(
    ({ id }: { id: string; name: string }) => {
      return selectedOptions[0] === id;
    },
    [selectedOptions],
  );

  return (
    <Box className="m-20 rounded-lg pt-3">
      <div className="m-7">
        <Button
          ref={menuCheckboxButtonRef}
          onClick={() => setIsMenuCheckboxShown(true)}>
          Menu Checkbox
        </Button>
        <Menu
          activatingElementRef={menuCheckboxButtonRef}
          shown={isMenuCheckboxShown}
          onClickOutside={() => setIsMenuCheckboxShown(false)}
          onItemClick={handleSelectItem}
          options={menuOptions}
          keyGetter={getKeyFromMenuOption}
          itemRenderer={menuOptionsRenderer}
          isSelectedGetter={checkOptionSelected}
        />
      </div>
      <div className="m-7">
        <Button
          ref={menuRadioButtonRef}
          onClick={() => setIsMenuRadioShown(true)}>
          Menu Radio
        </Button>
        <Menu
          activatingElementRef={menuRadioButtonRef}
          shown={isMenuRadioShown}
          onClickOutside={() => setIsMenuRadioShown(false)}
          onItemClick={handleSelectItem}
          options={menuOptions}
          keyGetter={getKeyFromMenuOption}
          itemRenderer={menuOptionsRenderer}
          isSelectedGetter={checkOptionSelected}
          useRadios
        />
      </div>
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
        <RadioButton
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

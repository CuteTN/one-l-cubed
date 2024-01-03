import React from "react";
import { EThemes, useThemes } from "contexts/themes-provider/themes.provider";
import { NavBar } from "components/common/AppBar.component";
import darkLogo from "assets/images/one-l-cubed-dark.png";
import lightLogo from "assets/images/one-l-cubed-light.png";
import { Box } from "components/common/Frame.component";
import { Button } from "components/common/Button.component";
import { Icon } from "components/common/Icon.component";

const THEMES_DATA = {
  [EThemes.light]: {
    logo: lightLogo,
  },
  [EThemes.dark]: {
    logo: darkLogo,
  },
};

export function AppNavBar() {
  const { currentTheme, setTheme } = useThemes();

  const themeData = React.useMemo(() => {
    return THEMES_DATA[currentTheme];
  }, [currentTheme]);

  const handleToggleTheme = React.useCallback(() => {
    setTheme(prev => {
      if (prev === EThemes.dark) return EThemes.light;
      else return EThemes.dark;
    })
  }, [setTheme]);

  return (
    <NavBar>
      <div className="flex w-full h-20 align-middle">
        <div>
          <Box className="transition-size duration-500 delay-0 ease-in-out rounded-br-full overflow-hidden w-0 h-0 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:h-44 lg:w-44">
            <img
              className="-mt-3 -ml-3 h-[90%]"
              src={themeData.logo}
              alt="One L Cubed logo"
              draggable={false}
            />
          </Box>

          <img
            className="transition-opacity duration-500 delay-0 ease-in-out h-full opacity-100 sm:opacity-0"
            src={themeData.logo}
            alt="One L Cubed logo"
            draggable={false}
          />
        </div>
        <div className="flex flex-grow"></div>
        <div className="flex my-auto mr-5">
          <Button onClick={handleToggleTheme}>
            <Icon iconName={currentTheme} className="w-8 h-8"/>
          </Button>
        </div>
      </div>
    </NavBar>
  );
}

import React from "react";
import { EThemes, useThemes } from "contexts/themes-provider/themes.provider";
import { NavBar } from "components/common/AppBar.component";
import darkLogo from "assets/images/one-l-cubed-dark.png";
import lightLogo from "assets/images/one-l-cubed-light.png";
import { Box } from "components/common/Frame.component";

const THEMES_DATA = {
  [EThemes.light]: {
    logo: lightLogo,
  },
  [EThemes.dark]: {
    logo: darkLogo,
  },
};

export function AppNavBar({}: {}) {
  const { currentTheme, setTheme } = useThemes();

  const themeData = React.useMemo(() => {
    return THEMES_DATA[currentTheme];
  }, [currentTheme]);

  return (
    <NavBar>
      <div className="flex h-20 justify-center align-middle">
        <div>
          <Box className="transition-all duration-500 delay-0 ease-in-out rounded-br-full overflow-hidden w-0 h-0 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:h-44 lg:w-44">
            <img
              className="-mt-3 -ml-3 h-[90%]"
              src={themeData.logo}
              alt="One L Cubed logo"
            />
          </Box>

          <img
            className="transition-opacity duration-500 delay-0 ease-in-out h-full opacity-100 sm:opacity-0"
            src={themeData.logo}
            alt="One L Cubed logo"
          />
        </div>
        <div className="flex flex-1"></div>
        <div></div>
      </div>
    </NavBar>
  );
}

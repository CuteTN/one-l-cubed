import React from "react";
import { THEME_STORAGE_KEY } from "../../common/constants/local-storage.constants";

export enum EThemes {
  light = "light",
  dark = "dark",
}

type TThemesContextValue = {
  currentTheme: EThemes;
  setTheme: (theme: EThemes) => void;
};

const themesContext = React.createContext<TThemesContextValue>(null as any);

function loadDefaultTheme(): EThemes {
  const fromLocalStorage = localStorage.getItem(THEME_STORAGE_KEY);
  for (let entry of Object.entries(EThemes)) {
    const [key, name] = entry;
    if (fromLocalStorage === name) return EThemes[key];
  }

  const isDarkPreferred = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  return isDarkPreferred? EThemes.dark : EThemes.light;
}
const defaultTheme = loadDefaultTheme();

export function ThemesProvider({ children }) {
  const [currentTheme, setCurrentTheme] = React.useState<EThemes>(defaultTheme);

  React.useEffect(() => {
    const htmlElement = Array.from(document.getElementsByTagName("html"))[0];
    for (let name of Object.values(EThemes)) {
      if (htmlElement.classList.contains(name)) {
        htmlElement.classList.remove(name);
      }
    }
    htmlElement.classList.add(currentTheme);

    localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
  }, [currentTheme])

  const contextValue = React.useMemo<TThemesContextValue>(() => ({
    currentTheme,
    setTheme: setCurrentTheme,
  }), [currentTheme, setCurrentTheme])

  return <themesContext.Provider value={contextValue}>
    {children}
  </themesContext.Provider>
}

export function useThemes() {
  return React.useContext(themesContext);
}
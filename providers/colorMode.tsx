import { useContext, createContext, useEffect, useState } from "react";

export enum ColorMode {
  DARK = "dark",
  LIGHT = "light",
}

type ColorModeContextType = {
  mode: ColorMode;
  setLightMode: () => void;
  setDarkMode: () => void;
  toggleColorMode: () => void;
};

const ColorModeContext = createContext<ColorModeContextType>({
  mode: ColorMode.LIGHT,
  setLightMode: () => undefined,
  setDarkMode: () => undefined,
  toggleColorMode: () => undefined,
});

type Props = {
  children: JSX.Element;
};

export function ColorModeProvider({ children }: Props) {
  const colorModes = useColorModeProvider();
  return (
    <ColorModeContext.Provider value={colorModes}>
      {children}
    </ColorModeContext.Provider>
  );
}

function useColorModeProvider() {
  const [mode, setMode] = useState<ColorMode>(ColorMode.LIGHT);

  function toggleColorMode() {
    if (mode == ColorMode.DARK) setLightMode();
    else setDarkMode();
  }

  function setLightMode() {
    localStorage.removeItem("theme");
    setMode(ColorMode.LIGHT);
    document.documentElement.classList.remove(ColorMode.DARK);
  }
  function setDarkMode() {
    localStorage.setItem("theme", ColorMode.DARK);
    setMode(ColorMode.DARK);
    document.documentElement.classList.add(ColorMode.DARK);
  }

  useEffect(() => {
    if (localStorage.theme === ColorMode.DARK) setDarkMode();
    else setLightMode();
  }, []);

  return {
    mode,
    setLightMode,
    setDarkMode,
    toggleColorMode,
  };
}

export const useColorMode = () => useContext(ColorModeContext);

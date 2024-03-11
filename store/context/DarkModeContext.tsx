"use client";
import { createContext } from "react";

export interface IDarkModeContext {
    isDarkMode: boolean;
    setDarkMode: (val: boolean) => void;
}

export const DarkModeContext = createContext<IDarkModeContext>({
  isDarkMode: false,
  setDarkMode: () => null,
});

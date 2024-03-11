"use client"
import { useState } from "react";
import { IDarkModeContext } from "../context/DarkModeContext";
import { usePathname } from "next/navigation";

export function useDarkModeProvider(): IDarkModeContext {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const pathname = usePathname()

  return {
    isDarkMode: pathname.startsWith('/docs') ? isDarkMode : false,
    setDarkMode
  }
}

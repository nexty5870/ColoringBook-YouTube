"use client"
import React, { FC, ReactNode } from "react";
import { Inter } from "next/font/google";
import { DarkModeContext } from "@/store/context/DarkModeContext";
import { useDarkModeProvider } from "@/store/hooks/useDarkModeProvider";
import AppSubLayout from "./AppSubLayout";

const font = Inter({ subsets: ["latin"] });

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const darkModeValue = useDarkModeProvider();

  return (
    <DarkModeContext.Provider value={darkModeValue}>
      <AppSubLayout>{children}</AppSubLayout>
    </DarkModeContext.Provider>
  );
};

export default AppLayout;

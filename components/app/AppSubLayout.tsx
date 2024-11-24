"use client";
import React, { FC, ReactNode, useContext, useEffect } from "react";
import cx from "classnames";
import PlausibleProvider from "next-plausible";
import config from "@/config";
import GTMProvider from "../GTMProvider/GTMProvider";
import ClientLayout from "../LayoutClient";
import { Inter } from "next/font/google";
import { DarkModeContext } from "@/store/context/DarkModeContext";

const font = Inter({ subsets: ["latin"] });

interface AppSubLayoutProps {
  children: ReactNode;
}

const AppSubLayout: FC<AppSubLayoutProps> = ({ children }) => {
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className={cx(font.className, "h-[100%]")}>
      {config.domainName && <PlausibleProvider domain={config.domainName} />}
      <GTMProvider />
      <div className="h-[100%]">
        <ClientLayout>{children}</ClientLayout>
      </div>
    </div>
  );
};

export default AppSubLayout;

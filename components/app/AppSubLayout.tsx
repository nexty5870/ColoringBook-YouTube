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

  // useEffect(() => {
  //   console.log("IS DARK MODE IN SUB: ", isDarkMode)
  // }, [isDarkMode])

  console.log("IS DARK MODE IN SUB: ", isDarkMode)

  return (
    <html
      lang="en"
      data-theme={isDarkMode ? "dark" : "light"}
      className={cx(font.className, "h-[100%]")}
    >
      {config.domainName && (
        <head>
          <PlausibleProvider domain={config.domainName} />
        </head>
      )}
      <GTMProvider />
      <body className="h-[100%]">
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
};

export default AppSubLayout;

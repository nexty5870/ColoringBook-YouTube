import { ReactNode } from "react";
import { Viewport } from "next";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import "./globals.css";

import "react-tooltip/dist/react-tooltip.css";
import AppLayout from "@/components/app/AppLayout";

export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }: { children: ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}

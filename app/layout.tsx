import { ReactNode } from "react";
import { Viewport } from "next";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import "./globals.css";

import "react-tooltip/dist/react-tooltip.css";
import AppLayout from "@/components/app/AppLayout";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import SupabaseProvider from "@/providers/supabase-provider";
import { CreditsProvider } from "@/providers/credits-provider";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider>
          <CreditsProvider>
            <AppLayout>
              {children}
            </AppLayout>
            <Toaster />
          </CreditsProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}

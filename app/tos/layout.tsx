import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import { ReactNode } from "react";

export const metadata = getSEOTags({
  title: `${config.appName} | Terms of Service`,
  description: "Terms of service page of Next Starter AI!",
  canonicalUrlRelative: "/tos",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

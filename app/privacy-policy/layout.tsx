import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import { ReactNode } from "react";

export const metadata = getSEOTags({
  title: `${config.appName} | Privacy Policy`,
  description: "Privacy policy page of Next Starter AI!",
  canonicalUrlRelative: "/privacy-policy",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

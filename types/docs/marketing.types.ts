import { ReactNode } from "react";

export interface MarketingItemType {
    title: string;
    url: string;
    linkStrength?: number;
    description: ReactNode;
}
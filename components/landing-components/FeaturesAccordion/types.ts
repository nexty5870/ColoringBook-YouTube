import type { JSX } from "react";

export interface Feature {
    title: string;
    description: string;
    type?: "video" | "image";
    path?: string;
    format?: string;
    alt?: string;
    svg?: JSX.Element;
}
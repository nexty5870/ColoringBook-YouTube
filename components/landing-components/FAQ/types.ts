import type { JSX } from "react";

export interface FAQItemProps {
    question: string;
    answer: JSX.Element;
}

export interface FAQProps {
    questions?: FAQItemProps[];
}
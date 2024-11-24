import { ReactElement } from "react";

export type TabOrientation = "horizontal" | "vertical";

export type NSTabProps = {
    orientation?: TabOrientation;
    className?: string;
    disabled?: boolean;
    value: string;
    options: string[] | { id: string, label: string | ReactElement }[];
    onChange: (value: string) => void;
};
import { ReactElement } from "react";
import { IconType } from "../NSIcon";

export type NSDrawerProps = {
    icon: IconType | ReactElement;
    title: string;
    trigger: ReactElement;
    className?: string;
    children: any;
};
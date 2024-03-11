import React from "react";
import { IconType } from "../NSIcon";

export type IconButtonProps = {
    type?: IconType;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    hasBorder?: boolean;
};
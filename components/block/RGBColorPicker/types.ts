import React from "react";
import { Placement } from "@popperjs/core";

export interface RGBColorPickerProps {
    color: string;
    onColorChange: React.Dispatch<React.SetStateAction<string>>;
    placement?: Placement;
}
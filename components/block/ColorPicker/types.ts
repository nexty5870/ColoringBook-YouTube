import { Placement } from "@popperjs/core";

export interface ColorPickerProps {
    color: string;
    onColorChange: (value: string) => void;
    placement?: Placement;
    allowEmpty?: boolean;
}
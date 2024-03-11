export type SwitchSize = "sm" | "lg";

export type NSSwitchProps = {
    size?: SwitchSize;
    label?: string;
    className?: string;
    disabled?: boolean;
    checked: boolean;
    onChange: (value: boolean) => void;
};
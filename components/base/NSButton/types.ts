import React from "react";

export type ButtonVariant = "brand" | "danger" | "success" | "warning" | "neutral" | "invert";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    outlined?: boolean;
    disabled?: boolean;
    center?: boolean;
    narrow?: boolean;
    className?: string;
    children: any | any[];
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
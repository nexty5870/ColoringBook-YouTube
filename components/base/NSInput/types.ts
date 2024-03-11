import React from "react";

export type InputProps = {
    value?: string | number | readonly string[];
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    type?: React.HTMLInputTypeAttribute;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
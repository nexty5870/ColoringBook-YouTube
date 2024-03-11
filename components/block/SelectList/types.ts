export interface SelectListProps {
    value: string;
    options: { id: string; label: string }[];
    disabled: boolean;
    onChange: (value: string) => void;
}
export interface NSSliderProps {
    onChange: (val: number) => void;
    value: number;
    renderInput?: boolean;
    min?: number;
    max?: number;
}
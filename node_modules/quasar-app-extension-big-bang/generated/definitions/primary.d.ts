export type TPrimaryEntry = {
    reference: string;
    p50: string;
    p100: string;
    p200: string;
    p300: string;
    p400: string;
    p500: string;
    p600: string;
    p700: string;
    p800: string;
    p900: string;
    p950: string;
};
export type TPrimaryLabel = "Contrast" | "Emerald" | "Green" | "Lime" | "Orange" | "Amber" | "Yellow" | "Teal" | "Cyan" | "Sky" | "Blue" | "Indigo" | "Violet" | "Purple" | "Fushia" | "Pink" | "Rose";
export declare const primaries: Map<TPrimaryLabel, TPrimaryEntry>;

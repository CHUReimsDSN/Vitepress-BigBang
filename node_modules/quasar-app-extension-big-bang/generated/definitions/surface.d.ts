export type TSurfaceEntry = {
    reference: string;
    s0: string;
    s50: string;
    s100: string;
    s200: string;
    s300: string;
    s400: string;
    s500: string;
    s600: string;
    s700: string;
    s800: string;
    s900: string;
    s950: string;
};
export type TSurfaceLabel = "Slate" | "Gray" | "Zinc" | "Neutral" | "Stone" | "Soho" | "Viva" | "Ocean" | "Taupe" | "Mauve" | "Mist" | "Olive";
export declare const surfaces: Map<TSurfaceLabel, TSurfaceEntry>;

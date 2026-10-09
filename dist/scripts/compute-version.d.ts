type TMode = "package.json" | "ruby";
export declare function computeVersion(options: {
    mode: TMode;
    fileToReadPath: string;
}): void;
export {};

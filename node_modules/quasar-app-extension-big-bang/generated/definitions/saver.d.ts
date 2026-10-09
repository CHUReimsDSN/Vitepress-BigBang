import type { TPrimaryLabel } from "./primary";
import type { TSurfaceLabel } from "./surface";
export type TSaveStrategy = "none" | "local-storage";
export declare class Saver {
    private static keyName;
    private static serializerSeparator;
    static save(primaryLabel: TPrimaryLabel, surfaceLabel: TSurfaceLabel): void;
    static load(): [TPrimaryLabel, TSurfaceLabel];
    private constructor();
}

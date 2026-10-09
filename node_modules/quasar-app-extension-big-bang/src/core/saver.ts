import type { TPrimaryLabel } from "./primary";
import type { TSurfaceLabel } from "./surface";

export type TSaveStrategy = "none" | "local-storage";

export class Saver {
  private static keyName = "quasar-big-bang-theme";
  private static serializerSeparator = "|";

  static save(primaryLabel: TPrimaryLabel, surfaceLabel: TSurfaceLabel) {
    localStorage.setItem(
      this.keyName,
      `${primaryLabel}${this.serializerSeparator}${surfaceLabel}`,
    );
  }

  static load(): [TPrimaryLabel, TSurfaceLabel] {
    return (
      (localStorage.getItem(this.keyName)?.split(this.serializerSeparator) as [
        TPrimaryLabel,
        TSurfaceLabel,
      ]) ?? ["Emerald", "Slate"]
    );
  }

  private constructor() {}
}

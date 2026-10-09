import { primaries, type TPrimaryLabel } from "../core/primary";
import { surfaces, type TSurfaceLabel } from "../core/surface";
import { Saver, type TSaveStrategy } from "../core/saver";
import { setupDefaultProps } from "./default-props";

/**
 * Injected class for managing theme
 * Shall be used in components by using the 'inject' method from vue
 */
export class BigBangTheme {
  private static _primary: TPrimaryLabel = "Emerald";
  private static _surface: TSurfaceLabel = "Slate";
  private static _saveStrategy: TSaveStrategy = "none";

  /**
   * Keep this for internal behaviour
   */
  private constructor() {}

  /**
   * Set the primary color for the entire app.
   * This function calls the trySaveTheme() method.
   *
   * @param primaryLabel Label of the primary color
   */
  static setPrimary(primaryLabel: TPrimaryLabel) {
    const primary = primaries.get(primaryLabel);
    if (!primary) {
      return;
    }
    this._primary = primaryLabel;
    for (const entry of Object.entries(primary)) {
      document.documentElement.style.setProperty(
        `--primary-${entry[0].replace("p", "")}`,
        entry[1],
      );
    }
    this.trySaveTheme();
  }

  /**
   * Get current primary label
   */
  static getPrimary() {
    return this._primary;
  }

  /**
   * Set the primary color for the entire app.
   * This function calls the trySaveTheme() method.
   *
   * @param surfaceLabel Label of the surface color
   */
  static setSurface(surfaceLabel: TSurfaceLabel) {
    const surface = surfaces.get(surfaceLabel);
    if (!surface) {
      return;
    }
    this._surface = surfaceLabel;
    for (const entry of Object.entries(surface)) {
      document.documentElement.style.setProperty(
        `--surface-${entry[0].replace("s", "")}`,
        entry[1],
      );
    }
    this.trySaveTheme();
  }

  /**
   * Get current surface label
   */
  static getSurface() {
    return this._surface;
  }

  /**
   * Set save mode
   *
   * @param strategy Strategy for the save mode
   */
  static setSaveMode(strategy: TSaveStrategy) {
    this._saveStrategy = strategy;
  }

  /**
   * Try to save the theme depending on the save mode
   * If save mode is set to 'none', this will do nothing
   */
  static trySaveTheme() {
    if (this._saveStrategy === "none") {
      return false;
    }
    Saver.save(this._primary, this._surface);
    return true;
  }

  /**
   * Try to load the theme depending on the save mode
   * If the save mode is set to 'none', this will do nothing
   * If the load result is empty, the theme will be set with the default primary and surface colors
   */
  static tryLoadTheme() {
    if (this._saveStrategy === "none") {
      return false;
    }
    const themeData = Saver.load();
    this.setPrimary(themeData[0]);
    this.setSurface(themeData[1]);
    return true;
  }

  /**
   * Get the current save strategy
   */
  static getSaveMode() {
    return this._saveStrategy;
  }

  static setupDefaultProps() {
    setupDefaultProps()
  }
}

import { type TPrimaryLabel } from "../core/primary";
import { type TSurfaceLabel } from "../core/surface";
import { type TSaveStrategy } from "../core/saver";
/**
 * Injected class for managing theme
 * Shall be used in components by using the 'inject' method from vue
 */
export declare class BigBangTheme {
    private static _primary;
    private static _surface;
    private static _saveStrategy;
    /**
     * Keep this for internal behaviour
     */
    private constructor();
    /**
     * Set the primary color for the entire app.
     * This function calls the trySaveTheme() method.
     *
     * @param primaryLabel Label of the primary color
     */
    static setPrimary(primaryLabel: TPrimaryLabel): void;
    /**
     * Get current primary label
     */
    static getPrimary(): TPrimaryLabel;
    /**
     * Set the primary color for the entire app.
     * This function calls the trySaveTheme() method.
     *
     * @param surfaceLabel Label of the surface color
     */
    static setSurface(surfaceLabel: TSurfaceLabel): void;
    /**
     * Get current surface label
     */
    static getSurface(): TSurfaceLabel;
    /**
     * Set save mode
     *
     * @param strategy Strategy for the save mode
     */
    static setSaveMode(strategy: TSaveStrategy): void;
    /**
     * Try to save the theme depending on the save mode
     * If save mode is set to 'none', this will do nothing
     */
    static trySaveTheme(): boolean;
    /**
     * Try to load the theme depending on the save mode
     * If the save mode is set to 'none', this will do nothing
     * If the load result is empty, the theme will be set with the default primary and surface colors
     */
    static tryLoadTheme(): boolean;
    /**
     * Get the current save strategy
     */
    static getSaveMode(): TSaveStrategy;
    static setupDefaultProps(): void;
}

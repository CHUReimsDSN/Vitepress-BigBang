import { App } from "vue";
import { Quasar, Dark } from "quasar";
import {
  BigBangTheme,
  type TPrimaryLabel,
  type TSurfaceLabel,
} from "quasar-app-extension-big-bang";
import "virtual:group-icons.css";
import "./style.scss";

export function setupVitepressBigBangTheme(
  app: App,
  options?: {
    primary?: TPrimaryLabel;
    surface?: TSurfaceLabel;
  },
) {
  app.use(Quasar, {
    plugins: { Dark },
  });
  if (typeof window !== "undefined") {
    const syncDarkMode = () => {
      Dark.set(document.documentElement.classList.contains("dark"));
    };
    syncDarkMode();
    const observer = new MutationObserver(syncDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }
  BigBangTheme.setPrimary(options.primary);
  BigBangTheme.setSurface(options.surface);
  BigBangTheme.setupDefaultProps();
}
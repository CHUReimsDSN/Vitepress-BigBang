import { defineBoot } from "#q-app";
import QBBLabel from "../components/QBBLabel.vue";
import QBBThemePicker from "../components/QBBThemePicker.vue";
import QBBTime from "../components/QBBTime.vue";
import { BigBangTheme } from "../core/big-bang-theme";

export default defineBoot(async ({ app }) => {
  app.component("qbb-time", QBBTime);
  app.component("qbb-theme-picker", QBBThemePicker);
  app.component("qbb-label", QBBLabel);
  BigBangTheme.setupDefaultProps()
});

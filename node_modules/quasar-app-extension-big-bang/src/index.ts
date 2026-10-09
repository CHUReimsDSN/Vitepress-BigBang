/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 */

import { defineIndexScript } from "#q-app";

// can be async
export default defineIndexScript((api) => {
  api.extendQuasarConf(() => ({
    boot: ["~quasar-app-extension-big-bang/src/runtime/boot.register.ts"],
  }));
  api.extendQuasarConf((conf) => {
    if (conf.framework?.config) {
      conf.framework.config.ripple = false;
    }
  });
  const registerDescrApiByLabel = (label: string) => {
    api.registerDescribeApi(label, `./generated/components/${label}.json`);
  };
  registerDescrApiByLabel("QBBThemePicker");
  registerDescrApiByLabel("QBBLabel");
  registerDescrApiByLabel("QBBTime");
});

export { BigBangTheme } from "./core/big-bang-theme";
export {
  type TPrimaryLabel,
  type TPrimaryEntry,
  primaries,
} from "./core/primary";
export {
  type TSurfaceLabel,
  type TSurfaceEntry,
  surfaces,
} from "./core/surface";
export type { TSaveStrategy } from "./core/saver";
export type {
  TComponentApi,
  TPropDefinition,
  TMethodDefinition,
} from "./scripts/generate-components-json";

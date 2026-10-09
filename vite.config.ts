import { defineConfig } from "vite";
import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import { groupIconVitePlugin } from "vitepress-plugin-group-icons";

const external = (id: string) =>
  id === "vue" ||
  id.startsWith("vue/") ||
  id === "vitepress" ||
  id.startsWith("vitepress/") ||
  id === "quasar" ||
  id.startsWith("quasar/") ||
  id === "quasar-app-extension-big-bang" ||
  id.startsWith("quasar-app-extension-big-bang/") ||
  id === "vitepress-plugin-group-icons" ||
  id.startsWith("vitepress-plugin-group-icons/");

export default defineConfig({
  plugins: [vue(), groupIconVitePlugin()],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        scripts: resolve(__dirname, "src-scripts/index.ts"),
      },
      formats: ["es"],
    },
    rolldownOptions: { external },
  },
});

import { defineConfig } from "wxt";
import path from "path";

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  modules: ["@wxt-dev/module-svelte"],
  alias: {
    $lib: path.resolve("./src/lib"),
  },
});

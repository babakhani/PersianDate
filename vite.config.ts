import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import pkg from "./package.json" with { type: "json" };

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command, mode }) => {
  const isMinified = mode === 'minified';
  const isBuild = command === 'build';

  return {
    server: {
      open: isBuild ? false: "/test/index.html",
    },
    build: {
      outDir: "dist",
      lib: {
        entry: resolve(__dirname, "src/init.js"),
        name: "PersianDate",
        fileName: () => isMinified ? `persian-date.min.js` : `persian-date.js`,
        formats: ["iife"],
      },
      commonjsOptions: {
        transformMixedEsModules: true,
        include: [/src\/.*/],
      },
      rollupOptions: {
        external: ["jquery"],
        output: {
          globals: {
            jquery: "jQuery",
          },
          inlineDynamicImports: true,
          format: "iife",
          esModule: false,
        },
      },
      target: "es2015",
      sourcemap: true,
      minify: isMinified ? 'esbuild' : false,
    },
    define: {
      "process.env.NODE_ENV": '"production"',
      __VERSION__: JSON.stringify(pkg.version),
    },
  };
});

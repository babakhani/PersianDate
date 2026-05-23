import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import pkg from "./package.json";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command, mode }) => {
    const isMinified = mode === "minified";
    const isBuild = command === "build";

    return {
        server: {
            open: isBuild ? false : "/test/index.html",
        },
        build: {
            outDir: "dist",
            emptyOutDir: false, // Because we use concurrently, we must not empty the output directory
            lib: {
                entry: resolve(__dirname, "src/init.js"),
                name: "persianDate",
            },
            rollupOptions: {
                output: [
                    {
                        format: "es",
                        entryFileNames: isMinified
                            ? `persian-date.esm.min.mjs`
                            : `persian-date.esm.mjs`,
                        sourcemap: !isMinified,
                        minify: isMinified,
                    },
                    {
                        format: "cjs",
                        exports: "default",
                        entryFileNames: isMinified ? `persian-date.min.js` : `persian-date.js`,
                        sourcemap: !isMinified,
                        minify: isMinified,
                    },
                    {
                        format: "iife",
                        name: "persianDate",
                        entryFileNames: isMinified
                            ? `persian-date.iife.min.js`
                            : `persian-date.iife.js`,
                        sourcemap: !isMinified,
                        minify: isMinified,
                    },
                ],
            },
            target: "es2015",
            sourcemap: !isMinified,
            minify: isMinified ? "oxc" : false,
        },
        define: {
            "process.env.NODE_ENV": '"production"',
            __VERSION__: JSON.stringify(pkg.version),
        },
    };
});

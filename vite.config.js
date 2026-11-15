import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// The original project (Create React App) keeps JSX in .js files,
// so Vite is told to treat every .js file under src/ as JSX.
export default defineConfig({
    plugins: [react({ include: /\.(js|jsx)$/ })],
    resolve: {
        alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
    },
    esbuild: { loader: "jsx", include: /src\/.*\.js$/, exclude: [] },
    optimizeDeps: { esbuildOptions: { loader: { ".js": "jsx" } } },
    server: { port: 3000, open: true },
});

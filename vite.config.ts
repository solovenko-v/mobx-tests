import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const babelConfig = {
  babel: {
    plugins: [
      [
        "babel-plugin-styled-components",
        {
          displayName: true,
          fileName: false,
        },
      ],
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      ...(mode === "development" ? babelConfig : {}),
    }),
  ],
}));

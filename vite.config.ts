import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import fs from "fs";

export default defineConfig({
  plugins: [react()],
  // server: {
  //   https: {
  //     key: fs.readFileSync("_wildcard.example.dev+3-key.pem"),
  //     cert: fs.readFileSync("_wildcard.example.dev+3.pem"),
  //   },
  //   host: "localhost",
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8080",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //       secure: false,
  //     },
  //   },
  // },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite.config.js

import dns from "dns";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
    // omit
    plugins: [react()],
});

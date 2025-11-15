// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    plugins: [react()],
    base: "/F8-Zoom-Day-35/", // 👈 phải đúng với tên repo
});

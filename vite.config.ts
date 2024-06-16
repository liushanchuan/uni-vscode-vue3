import { defineConfig } from "vite"
import uni from "@dcloudio/vite-plugin-uni"

import AutoImport from "unplugin-auto-import/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      // 使用
      imports: ["vue"],
      dts: "src/auto-import.d.ts",
      // 如有用到eslint记得加上写段，没有用到可以忽略
      eslintrc: {
        enabled: true,
      },
    }),
  ],
})

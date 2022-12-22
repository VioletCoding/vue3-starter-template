import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 开发服务器配置 
  // https://cn.vitejs.dev/config/server-options.html#server-proxy
  server: {
    port: 3333,
    open: true,
    proxy: {
      "/api": {
        target: "",
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})

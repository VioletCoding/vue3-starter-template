import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

const resolve = (dir: string) => path.join(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
    base: '.',
    plugins: [vue()],
    // 开发服务器配置
    // https://cn.vitejs.dev/config/server-options.html#server-proxy
    server: {
        port: 3333,
        open: true,
        proxy: {
            '/api': {
                // 后端服务器地址
                target: 'http://localhost:8080',
                changeOrigin: true,
                ws: true,
                rewrite: path => path.replace(/^\/api/, ''),
            },
        },
    },
    build: {
        sourcemap: true,
    },
});

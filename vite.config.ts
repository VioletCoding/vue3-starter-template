import vue from '@vitejs/plugin-vue';
import path from 'path';
// import AutoImport from 'unplugin-auto-import/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    resolve: {
        alias: {
            '@/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             additionalData: `@use "@/styles/element/index.scss" as *;`,
    //         },
    //     },
    // },
    plugins: [
        vue(),
        // 按需加载ElementPlus组件
        // AutoImport({
        //     resolvers: [ElementPlusResolver()],
        // }),
        // Components({
        //     resolvers: [
        //         ElementPlusResolver({
        //             // 按需导入时自定义主题
        //             importStyle: 'sass',
        //         }),
        //     ],
        // }),
    ],
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

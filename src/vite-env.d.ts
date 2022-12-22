/// <reference types="vite/client" />
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const VueComponent: DefineComponent<{}, {}, any>;
    export default VueComponent;
}

// declare module 'element-plus/dist/locale/zh-cn.mjs';

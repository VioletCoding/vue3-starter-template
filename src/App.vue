<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
    <el-config-provider
        :z-index="3000"
        :locale="zhCn">
        <el-button type="primary">测试按钮</el-button>
        <div>
            <a
                href="https://vitejs.dev"
                target="_blank">
                <img
                    src="/vite.svg"
                    class="logo"
                    alt="Vite logo" />
            </a>
            <a
                href="https://vuejs.org/"
                target="_blank">
                <img
                    src="./assets/vue.svg"
                    class="logo vue"
                    alt="Vue logo" />
            </a>
        </div>
        <HelloWorld msg="Vite + Vue" />
    </el-config-provider>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

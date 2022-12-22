import Layout from '@/layout/Layout.vue';
import Home from '@/pages/Home.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Layout,
        children: [
            {
                path: '',
                component: Home,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

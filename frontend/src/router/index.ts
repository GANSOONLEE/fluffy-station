
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../pages/Index.vue')
    },
    {
        path: '/event-detail/:event-id',
        name: 'event-detail',
        component: () => import('../pages/EventDetail.vue')
    },
    {
        path: '/user-profile',
        name: 'user-profile',
        component: () => import('../pages/UserProfile.vue')
    },
    {
        path: '/conditional-and-terms',
        name: 'conditional-and-terms',
        component: () => import('../pages/ConditionalAndTerms.vue')
    },
    {
        path: '/backend/user-management',
        name: 'user-management',
        component: () => import('../pages/backend/UserManagement.vue')
    },
    {
        path: '/backend/event-management',
        name: 'event-management',
        component: () => import('../pages/backend/EventManagement.vue')
    },
    {
        path: '/backend/api-and-token-management',
        name: 'api-and-token-management',
        component: () => import('../pages/backend/ApiAndTokenManagement.vue')
    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router;
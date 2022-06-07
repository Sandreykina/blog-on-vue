import PostsPage from '@/components/pages/PostsPage'
import PostDetail from '@/components/pages/PostDetail'
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'post',
        component: PostsPage
    },
    {
        path: '/post/:id',
        component: PostDetail
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
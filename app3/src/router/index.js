import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/app3',
        name: 'home',
        component: Home
    },
    {
        path: '/app3/about',
        name: 'about',
        component: About
    }
]

const router = new VueRouter({
    routes
})

export default router

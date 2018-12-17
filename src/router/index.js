import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = {
    routes: [
        {
            path: '/',
            name: 'demo_index',
            component: resolve => require(['../demos/index'], resolve),
        },
        {
            path: '/demo/animation',
            name: 'demo_animation',
            component: resolve => require(['../demos/animation'], resolve),
        },
        {
            path: '/demo/transform',
            name: 'demo_transform',
            component: resolve => require(['../demos/transform'], resolve),
        },
        {
            path: '/demo/transition',
            name: 'demo_transition',
            component: resolve => require(['../demos/transition'], resolve),
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
}

const router = new Router(routes);

export default router
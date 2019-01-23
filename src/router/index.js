import Vue from 'vue'
import Router from 'vue-router'
import cssRouter from '@r/css'
import pluginRouter from '@r/plugin'
import frameRouter from '@r/frame'
import arithmeticRouter from '@r/arithmetic'

Vue.use(Router)

let routes = {
    routes: [
        {
            path: '/',
            name: 'demo',
            component: resolve => require(['@d/index'], resolve),
        },
        {
            path: '/comps',
            name: 'comps',
            component: resolve => require(['@d/comps'], resolve),
        },
        ...cssRouter,
        ...pluginRouter,
        ...frameRouter,
        ...arithmeticRouter,
        {
            path: '*',
            redirect: '/'
        }
    ]
}

const router = new Router(routes);

// 跳转后返回顶部
// router.afterEach((to, from, next) => {
router.afterEach(() => {
    window.scrollTo(0, 0);
})

export default router
import Vue from 'vue'
import Router from 'vue-router'
import cssRouter from '@r/css'
import pluginRouter from '@r/plugin'
import frameRouter from '@r/frame'

Vue.use(Router)

let routes = {
    routes: [
        {
            path: '/',
            name: 'demo',
            component: resolve => require(['@d/index'], resolve),
        },
        ...cssRouter,
        ...pluginRouter,
        ...frameRouter,
        {
            path: '*',
            redirect: '/'
        }
    ]
}

const router = new Router(routes);

export default router
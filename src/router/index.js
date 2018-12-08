import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes={
        routes: [
        {
            path: '/',
            name: 'index',
            component: resolve => require(['../pages/index'], resolve),
        },
        {
            path: '*',
            redirect: '/'
        }
        ]
  }

const router = new Router(routes);

export default router
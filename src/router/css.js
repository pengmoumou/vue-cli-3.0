export default [
    {
        path: '/css',
        name: 'demo_css',
        component: resolve => require(['@d/css/index'], resolve),
    },
    {
        path: '/css/animation',
        name: 'css_animation',
        component: resolve => require(['@d/css/animation'], resolve),
    },
    {
        path: '/css/canvas',
        name: 'css_canvas',
        component: resolve => require(['@d/css/canvas'], resolve),
    },
    {
        path: '/css/transform',
        name: 'css_transform',
        component: resolve => require(['@d/css/transform'], resolve),
    },
    {
        path: '/css/transition',
        name: 'css_transition',
        component: resolve => require(['@d/css/transition'], resolve),
    },
    {
        path: '/css/gradient',
        name: 'css_gradient',
        component: resolve => require(['@d/css/gradient'], resolve),
    },
    
]

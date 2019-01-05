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
    {
        path: '/css/pseudo_element',
        name: 'css_pseudo_element',
        component: resolve => require(['@d/css/pseudo_element'], resolve),
    },
    {
        path: '/css/pseudo_class',
        name: 'css_pseudo_class',
        component: resolve => require(['@d/css/pseudo_class'], resolve),
    },
]

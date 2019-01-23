export default [{
    path: '/plugin',
    name: 'demo_plugin',
    component: resolve => require(['@d/plugin/index'], resolve),
}, {
    path: '/plugin/swiper',
    name: 'plugin_swiper',
    component: resolve => require(['@d/plugin/swiper'], resolve),
},
{
    path: '/plugin/aos',
    name: 'plugin_aos',
    component: resolve => require(['@d/plugin/aos'], resolve),
},
{
    path: '/plugin/editor',
    name: 'plugin_editor',
    component: resolve => require(['@d/plugin/editor'], resolve),
},
]
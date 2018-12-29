export default [{
    path: '/plugin',
    name: 'demo_plugin',
    component: resolve => require(['@d/plugin/index'], resolve),
},{
    path: '/plugin/swiper',
    name: 'plugin_swiper',
    component: resolve => require(['@d/plugin/swiper'], resolve),
},
]
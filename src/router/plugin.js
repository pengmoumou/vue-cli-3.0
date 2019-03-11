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
{
    path: '/plugin/axios',
    name: 'plugin_axios',
    component: resolve => require(['@d/plugin/axios'], resolve),
},
{
    path: '/plugin/route',
    name: 'plugin_route',
    component: resolve => require(['@d/plugin/route'], resolve),
    redirect: '/route/demo0',
    children: [
        {
            path: '/route/demo0',
            name: 'route_demo0',
            component: resolve => require(['@d/plugin/components/demo0'], resolve),
        },
        {
            path: '/route/demo1',
            name: 'route_demo1',
            component: resolve => require(['@d/plugin/components/demo1'], resolve),
        },
        {
            path: '/route/demo2',
            name: 'route_demo2',
            component: resolve => require(['@d/plugin/components/demo2'], resolve),
        }
    ]
},
{
    path: '/plugin/echart',
    name: 'plugin_echart',
    component: resolve => require(['@d/plugin/echart'], resolve),
},
]
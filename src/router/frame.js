export default [{
    path: '/frame',
    name: 'demo_frame',
    component: resolve => require(['@d/frame/index'], resolve),
},
{
    path: '/frame/vuetify',
    name: 'frame_vuetify',
    component: resolve => require(['@d/frame/vuetify'], resolve),
},
{
    path: '/frame/three',
    name: 'frame_three',
    component: resolve => require(['@d/frame/three'], resolve),
},
{
    path: '/frame/element',
    name: 'frame_element',
    component: resolve => require(['@d/frame/element'], resolve),
},
]
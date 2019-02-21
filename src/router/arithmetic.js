export default [{
    path: '/arithmetic',
    name: 'demo_arithmetic',
    component: resolve => require(['@d/arithmetic/index'], resolve),
}, {
    path: '/arithmetic/sort',
    name: 'arithmetic_sort',
    component: resolve => require(['@d/arithmetic/sort'], resolve),
},
{
    path: '/arithmetic/closure',
    name: 'arithmetic_closure',
    component: resolve => require(['@d/arithmetic/closure'], resolve),
}
]
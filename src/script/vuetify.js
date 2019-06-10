import Vue from 'vue'
import Vuetify from 'vuetify'
import i18n from '@script/i18n'
import zh from 'vuetify/src/locale/zh-Hans.ts'
import en from 'vuetify/src/locale/en.ts'
//颜色包
// import colors from 'vuetify/es5/util/colors'

//12月20日，icon引入失败
//Vuetify的默认图标字体
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import kline from '@a/frame/k.svg'

// 12月20日，翻译字段输出正常但是不能在vue中进行翻译
// console.log(zh.dataIterator.rowsPerPageText)

Vue.use(Vuetify, {
    //定制主题
    theme: {
        // primary: colors.red.darken1, // #E53935
        // secondary: colors.red.lighten4, // #FFCDD2
        // accent: colors.indigo.base // #3F51B5
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    },
    // 启用customProperties还将为每种主题颜色生成一个css变量，可以在组件的<style>块中使用它
    options: { customProperties: true, },
    lang: {
        locales: { 'zh-Hans': zh, en },
        current: 'zh-Hans',
        //i18n与Vuetify集成
        t: (key, ...params) => i18n.t(key, params)
    },
    iconfont: 'mdi', // 'md' || 'mdi' || 'fa' || 'fa4'
    icons: {
        // kline: kline,
        // 'product': 'mdi-dropbox',
        // 'support': 'mdi-lifebuoy',
        // 'steam': 'mdi-steam-box',
        // 'pc': 'mdi-desktop-classic',
        // 'xbox': 'mdi-xbox',
        // 'playstation': 'mdi-playstation',
        // 'switch': 'mdi-nintendo-switch'
    },//自定义图标
})
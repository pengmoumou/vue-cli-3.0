import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './zh.js'
import en from './en.js'

Vue.use(VueI18n)

let language = localStorage.getItem("vue_language");

const i18n = new VueI18n({
  locale: language ? language : 'zh',
  messages: {
    'zh': zh,
    'en': en
  }
})

export default i18n
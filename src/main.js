import Vue from 'vue'
import App from '@/App.vue'
import router from '@r/index';
import i18n from '@script/i18n'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  i18n
}).$mount('#app')

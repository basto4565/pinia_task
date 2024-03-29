import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(PiniaVuePlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const pinia = createPinia()

Vue.config.productionTip = false

new Vue({
  el: '#app',
  pinia,
  render: h => h(App),
}).$mount('#app')
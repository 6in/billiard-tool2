import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'

import * as VueGL from 'vue-gl'

Object.keys(VueGL).forEach(name => {
  Vue.component(name, VueGL[name])
})

Vue.use(ToggleButton)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

import '@/plugins/apexcharts'

Vue.config.productionTip = false

// import Vuetify, {
//   VApp,
//   VTabs,
//   VTab
// } from 'vuetify/lib'

// const vuetify = new Vuetify({});

export const bus = new Vue();

new Vue({
  // vuetify,
  render: h => h(App),
  store
}).$mount('#app')
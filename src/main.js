import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueSilentbox from 'vue-silentbox'

Vue.use(VueSilentbox)
Vue.use(BootstrapVue)


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/css/font-awesome.min.css'
import '../src/assets/css/material-design-iconic-font.min.css'
import '../src/assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

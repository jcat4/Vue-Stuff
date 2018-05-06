import Vue from 'vue'
import App from './App.vue'

import Servers from './components/Servers.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

Vue.component('servers', Servers)
Vue.component('headerCmp', Header)
Vue.component('footerCmp', Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})

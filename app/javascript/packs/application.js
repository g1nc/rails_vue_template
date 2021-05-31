import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'

import router from '../router'
import store from '../store'

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('app')) {
    new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
  }
})
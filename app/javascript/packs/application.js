import Vue from 'vue'
import App from './app.vue';
import Vuetify from 'vuetify';
import router from './routes.js';

import 'vuetify/dist/vuetify.min.css';
import 'slick-carousel/slick/slick.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })
})

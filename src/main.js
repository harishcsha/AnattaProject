import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store/modules/store.js';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VueAxios,
  axios,
  Vuex,
  render: h => h(App)
});

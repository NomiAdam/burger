import Vue from 'vue';
import App from './App';
import router from './router';

import Burger from "./components/Burger.vue";
import Controll from "./components/Controll.vue";

import {store} from "./store";

Vue.component("burger", Burger);
Vue.component("controll", Controll);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

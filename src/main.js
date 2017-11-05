require('../node_modules/vuetify/dist/vuetify.min.css');

import Vue from 'vue';
import App from './App';
import router from './router';
import * as firebase from "firebase";
import Vuetify from "vuetify";

import Burger from "./components/Burger.vue";
import Controll from "./components/Controll.vue";

import { store } from "./store";

Vue.component("burger", Burger);
Vue.component("controll", Controll);

Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyCTonXZfyQC2yusg9qkciZNYjza-MI0IGw",
      authDomain: "vue-burgerpicker.firebaseapp.com",
      databaseURL: "https://vue-burgerpicker.firebaseio.com",
      projectId: "vue-burgerpicker",
      storageBucket: "vue-burgerpicker.appspot.com",
      messagingSenderId: "380487341915"
    });
    this.$store.dispatch("fetchBurgers");
  }
})

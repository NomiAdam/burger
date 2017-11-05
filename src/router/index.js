import Vue from 'vue';
import Router from 'vue-router';
import Wrapper from '@/components/Wrapper';
import History from "@/components/History";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Wrapper',
      component: Wrapper
    },
    {
      path: "/history",
      name: "History",
      component: History
    }
  ],
  mode: "history"
});

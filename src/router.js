import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home/home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  router: [
    {
      path: '/home',
      name: 'Home',
      components: Home
    }
  ]
});
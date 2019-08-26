import Vue from 'vue';
import Router from 'vue-router';
import Anatta from '@/components/Anatta';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Anatta',
      component: Anatta
    }
  ]
});

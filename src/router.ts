import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

const throttling = () => import('./views/throttling.vue');
const Node = () => import('./views/Dom/node.vue');
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/wipeRepeat',
      name: 'wipeRepeat',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/wipeRepeat.vue'),
    },
    {
      path: '/throttling',
      name: 'throttling',
      component: throttling,
    },
    {
      path: '/node',
      name: 'node',
      component: Node,
    },
  ],
});

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueForm from './components/VueForm.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: VueForm,
  },
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

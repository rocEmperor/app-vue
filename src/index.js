import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './index.less';
import routes from './routers';
import store from './store'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI);

const router = new VueRouter({
  // mode: 'history',
  routes: routes
})
new Vue({
  router: router,
  store: store
}).$mount('#root');
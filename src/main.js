// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI, { Pagination } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import'./assets/css/base.css';
import './assets/css/common.css';
import './components/Aside.vue'
import './assets/fonts/icomoon.eot';
import './assets/fonts/icomoon.svg';
import './assets/fonts/icomoon.ttf';
import './assets/fonts/icomoon.woff';
import './assets/vue/pagination.vue';
import BaiduMap from 'vue-baidu-map';
import './assets/css/login.css';


Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.component("pagination", Pagination);
Vue.use(BaiduMap,{ak:'ztu4kVBu2FhG1F2xRmcdilimgVlNiSo9'})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

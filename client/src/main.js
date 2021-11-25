import Vue from 'vue'
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap/dist/js/bootstrap.bundle"
import { BootstrapVue } from 'bootstrap-vue'
import router from "./router";
import "./axios"
Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

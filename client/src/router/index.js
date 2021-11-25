import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./../views/Home.vue"
import Contact from "./../components/Contact.vue"
import NotFound from "./../components/404.vue"
import Redbull from "./../views/Redbull.vue"

Vue.use(VueRouter);

const routes = [
  //admin routes
  {
    path: "/",
    name: 'home',
    component: Home
  },
  {
    path: "/witchofendor",
    component: Redbull
  },
  {
    path: "/contact",
    name: 'contact',
    component: Contact
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

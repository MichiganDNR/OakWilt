import Vue from "vue";
import VueRouter from "vue-router";
import AppLayOut from "../components/AppLayOut.vue";
import SignIn from "../components/SignIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/upload-images",
    name: "AppLayOut",
    component: AppLayOut,
  },
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

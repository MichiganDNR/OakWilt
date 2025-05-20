import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "../firebase";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$auth = auth;

export default { auth };

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

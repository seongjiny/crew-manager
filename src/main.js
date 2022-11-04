import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
import router from "./router/index.js";
import vueCookies from "vue-cookies";
import Store from "./store/index.js";

Vue.config.productionTip = false;
Vue.use(vueCookies);
// 쿠키 만료일 7일
Vue.$cookies.config("7d");

new Vue({
  render: (h) => h(App),
  vuetify,
  router,
  Store,
}).$mount("#app");
window.Kakao.init("dff1563d00ae632fd9538a5fb1dad250");

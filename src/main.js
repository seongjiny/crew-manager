import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
import router from "./router/index.js";
import vueCookies from "vue-cookies";
import Store from "./store/index.js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

Vue.use(firebase);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlgamCb65mTDLa7Z53m33cSiu9lpSrubo",
  authDomain: "crew-manager-e370a.firebaseapp.com",
  databaseURL:
    "https://crew-manager-e370a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crew-manager-e370a",
  storageBucket: "crew-manager-e370a.appspot.com",
  messagingSenderId: "121632428862",
  appId: "1:121632428862:web:14fd3e791be23d12a1526f",
};
firebase.initializeApp(firebaseConfig);
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

import Vue from "vue";
import VueRouter from "vue-router";
import LoginComponent from "../components/LoginComponent.vue";
import HomeComponent from "../components/HomeComponent.vue";
import SignUpComponent from "../components/SignUpComponent.vue";
import VueCookies from "vue-cookies";

Vue.use(VueRouter);
const requireAuth = () => (to, from, next) => {
  if (VueCookies.get("email")) {
    return next();
  }
  next("/login");
};
///https://m.blog.naver.com/1ilsang/221338086140 로그인 리디렉션
export default new VueRouter({
  mode: "history", //해쉬값 제거 방식
  routes: [
    {
      path: "/login",
      component: LoginComponent,
    },
    {
      path: "/signup",
      component: SignUpComponent,
    },
    {
      path: "/home",
      component: HomeComponent,
      beforeEnter: requireAuth(),
    },
    {
      path: "/",
      component: LoginComponent,
    },
  ],
});

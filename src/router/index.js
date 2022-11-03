import Vue from "vue";
import VueRouter from "vue-router";
import LoginComponent from "../components/LoginComponent.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history", //해쉬값 제거 방식
  routes: [
    {
      path: "/login",
      component: LoginComponent,
    },
    {
      path: "/",
      component: LoginComponent,
    },
  ],
});

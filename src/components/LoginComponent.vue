<template>
  <div id="root">
    <button class="red--text" color="yellow" @click="kakaoLogin()">
      <img src="./../assets/kakao_login_medium_narrow.png" />
    </button>
    <button @click="kakaoLogout()">Log out</button>
    <p>{{ this.$cookies.get("email") }}</p>
  </div>
</template>

<script>
import VueCookies from "vue-cookies";
export default {
  name: "LoginComponent",
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile_nickname, account_email, gender",
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      console.log("Login 성공");
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          console.log(res);
          const acc = res.kakao_account;
          const nickname = acc.profile.nickname;
          const email = acc.email;
          console.log(nickname);
          console.log(email);
          VueCookies.set("nickname", nickname);
          VueCookies.set("email", email);
        },
        fail: (error) => {
          console.log(error);
        },
      });
    },
    kakaoLogout() {
      window.Kakao.isInitialized();

      window.Kakao.Auth.logout(function () {
        console.log("로그아웃");
        VueCookies.remove("nickname");
        VueCookies.remove("email");
      });
    },
  },
};
</script>

<style>
p {
  font-size: 50px;
}
#root {
  margin-top: 50px;
  text-align: center;
}
</style>
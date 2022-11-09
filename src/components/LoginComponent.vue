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
        scope: "profile_nickname, account_email, gender, profile_image",
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      console.log("Login 성공");
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          console.log(res.properties.profile_image);
          const acc = res.kakao_account;
          const nickname = acc.profile.nickname;
          const email = acc.email;
          const thumbnail_image_url = acc.profile.thumbnail_image_url;
          const profile_image_url = acc.profile.profile_image_url;
          console.log(acc);
          console.log(acc.profile);
          console.log(nickname);
          console.log(email);
          VueCookies.set("nickname", nickname);
          VueCookies.set("email", email);
          VueCookies.set("thumbnail_image_url", thumbnail_image_url);
          VueCookies.set("profile_image_url", profile_image_url);

          this.$router.push("/home");
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
        VueCookies.remove("thumbnail_image_url");
        VueCookies.remove("profile_image_url");
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
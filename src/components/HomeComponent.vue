<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32">
          <img :src="profile_image_url" />
        </v-avatar>

        <v-btn text> 크루 목록 </v-btn>
        <v-btn text> 내 프로필 </v-btn>
        <!-- <v-btn text> 크루 목록 </v-btn> -->
        <v-btn @click="read()" text>테스트</v-btn>
        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item v-for="n in 5" :key="n" link>
                  <v-list-item-content>
                    <v-list-item-title> List Item {{ n }} </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title @click="logout">
                      로그아웃
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import VueCookies from "vue-cookies";
import firebase from "firebase/compat/app";

export default {
  data: () => ({
    profile_image_url: VueCookies.get("profile_image_url"),
  }),
  methods: {
    logout() {
      window.Kakao.isInitialized();

      window.Kakao.Auth.logout(function () {
        console.log("로그아웃");
        VueCookies.remove("nickname");
        VueCookies.remove("email");
        VueCookies.remove("thumbnail_image_url");
        VueCookies.remove("profile_image_url");
      });

      this.$router.push("/login");
    },
    read() {
      console.log("trying firebase");
      console.log(firebase);
      firebase
        .database()
        .ref("data/")
        .child("test")
        .on("value", (sn) => {
          console.log(sn);
          console.log(sn.val());
        });
    },
  },
};
</script>
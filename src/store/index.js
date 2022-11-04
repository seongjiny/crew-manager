import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      nickname: "",
      email: "",
    };
  },
  mutations: {},
});

export default store;

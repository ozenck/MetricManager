// import Vue from 'vue';
// import Vuex from 'vuex';
// Vue.use(Vuex);


// const state = {
//     teamList: [{
//         header: "Header 1",
//         message: "Wish 1",
//         date: "2020-05-01 20:12"
//     }]
// };

// const getters = {
//     getteamList(state) {
//         return state.teamList;
//     }
// };

// const mutations = {
//     addWish(state, wishData) {
//         state.teamList.push(wishData);
//     }
// };

// const actions = {
//     addActionWish({ commit }, wishData) {
//         commit('addWish', wishData);
//     }
// };

// const store = new Vuex.Store({
//     state,
//     getters,
//     mutations,
//     actions
// })
// export default store;

import Vue from "vue";
import Vuex from "vuex";
import data from "./modules/data";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    data
  },
  strict: debug,
  mode: "history"
});

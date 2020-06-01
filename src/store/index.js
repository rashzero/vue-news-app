import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    numbOfPage: '',
  },
  mutations: {
    ADD_NEWS(state, payload) {
      state.news = payload.news;
      state.numbOfPage = payload.numbOfPage;
    },
  },
  actions: {
    async addNews(context, page) {
      const newsArr = await fetch(`HTTP://localhost:8080/api/news/${page}`);
      const newsJson = await newsArr.json();
      context.commit('ADD_NEWS', newsJson);
    },
  },
  getters: {
    getData(state) {
      return state;
    },
  },
});

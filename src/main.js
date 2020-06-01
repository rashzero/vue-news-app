import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store/index';


Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify: new Vuetify({}),
  render: (h) => h(App),
}).$mount('#app');

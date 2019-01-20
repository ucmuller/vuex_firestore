// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from '@/store/'
import Firebase from '@/api/firebase/firebase'
import Firestore from '@/api/firebase/firestore'


Vue.config.productionTip = false

Firebase.init();
// Firestore.init();

// Firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from '@/store/'
import Firebase from '@/api/firebase/firebase'
import Firestore from '@/api/firebase/firestore'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css' 
import { OAuth } from 'oauthio-web'
import './assets/css/theme.scss'





Vue.use(Vuetify)
Vue.use(VueMaterial)


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

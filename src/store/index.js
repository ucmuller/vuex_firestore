import Vue from 'vue'
import Vuex from 'vuex'
import userAuth from './modules/userAuth'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    userAuth: userAuth
  }
})
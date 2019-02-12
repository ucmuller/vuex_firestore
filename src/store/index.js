import Vue from 'vue'
import Vuex from 'vuex'
import userAuth from './modules/userAuth'
import invite from './modules/invite'
import reservation from './modules/reservation'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    userAuth: userAuth,
    invite: invite,
    reservation: reservation
  }
})
// import Vue from 'vue'
// import Vuex from 'vuex'
import types from '../mutation-types'

// Vue.use(Vuex);


const state = {
  user: {},
  status: false
}

const mutations = {
  [types.USER_ONAUTHSTATECHANGED](state, user) {
    state.user = user;
  },
  [types.USER_ONUSERSTATUSCHANGED](state, status) {
    state.status = status;
  }
}

const getters = {
  user(state) {
    return state.user
  },
  isSignedIn(state) {
    return state.status
  }
}


export default {
  state,
  mutations,
  getters
};
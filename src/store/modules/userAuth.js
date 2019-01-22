// import Vue from 'vue'
// import Vuex from 'vuex'
import types from '../mutation-types'

// Vue.use(Vuex);


const state = {
  user: {},
  status: false,
  imageURL: ''
}

const mutations = {
  [types.USER_ONAUTHSTATECHANGED](state, user) {
    state.user = user;
  },
  [types.USER_ONUSERSTATUSCHANGED](state, status) {
    state.status = status;
  },
  [types.USER_ONUSERIMAGECHANGED](state, imageURL) {
    state.imageURL = imageURL;
  }
}

const getters = {
  user(state) {
    return state.user
  },
  isSignedIn(state) {
    return state.status
  },
  imageURL(state){
    return state.imageURL
  }
}


export default {
  state,
  mutations,
  getters
};
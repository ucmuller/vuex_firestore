// import Vue from 'vue'
// import Vuex from 'vuex'
import types from '../mutation-types'

// Vue.use(Vuex);


const state = {
  data: null
}

const mutations = {
  [types.DATACHANGED](state, data) {
    state.data = data;
  }
}

const getters = {
  data(state) {
    return state.data
  },

}


export default {
  state,
  mutations,
  getters
};
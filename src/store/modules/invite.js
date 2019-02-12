// import Vue from 'vue'
// import Vuex from 'vuex'
import types from '../mutation-types'

// Vue.use(Vuex);


const state = {
  allData: null,
  inviteData: null,
  dataStatus: false
}

const mutations = {
  [types.DATACHANGED](state, data) {
    state.allData = data;
  },
  [types.INVITEDATACHANGED](state, data) {
    state.inviteData = data;
    state.dataStatus = true;
  },
}

const getters = {
  data(state) {
    return state.allData
  },
  inviteData(state) {
    return state.inviteData
  },
  inviteDataStatus(state) {
    return state.dataStatus
  },

}

const actions = {
  inviteDataChanged({ commit }, data) {
    commit(types.INVITEDATACHANGED, data)
  },
  dataChanged({ commit }, data){
    commit(types.DATACHANGED, data)
  }
}


export default {
  state,
  mutations,
  getters,
  actions
};
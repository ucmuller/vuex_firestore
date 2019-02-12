// import Vue from 'vue'
// import Vuex from 'vuex'
import types from '../mutation-types'

// Vue.use(Vuex);


const state = {
  allReservationData: null,
  reservationDataStatus: false
}

const mutations = {
  [types.RESERVATIONDATA](state, data) {
    state.allReservationData = data;
  }
}

const getters = {
  allReservationData(state) {
    return state.allReservationData
  },
}

const actions = {
  reservationData({ commit }, data){
    commit(types.RESERVATIONDATA, data)
  }
}


export default {
  state,
  mutations,
  getters,
  actions
};
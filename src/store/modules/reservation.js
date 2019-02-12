// import Vue from 'vue'
// import Vuex from 'vuex'
import types from '../mutation-types'

// Vue.use(Vuex);


const state = {
  allReservationData: null,
  reservationData: null,
  reservationDataStatus: false
}

const mutations = {
  [types.RESERVATIONDATA](state, data) {
    state.allReservationData = data;
  },
  [types.RESERVATIONDATACHANGED](state, data) {
    state.reservationData = data;
    state.reservationDataStatus = true;
  }
}

const getters = {
  allReservationData(state) {
    return state.allReservationData
  },
  reservationData(state) {
    return state.reservationData
  },
  reservationDataStatus(state){
    return state.reservationDataStatus
  }
}

const actions = {
  reservationData({ commit }, data){
    commit(types.RESERVATIONDATA, data)
  },
  reservationDataChanged({ commit }, data){
    commit(types.RESERVATIONDATACHANGED, data)

  }
}


export default {
  state,
  mutations,
  getters,
  actions
};
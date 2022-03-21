import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const state = {
  egos: []
}

const getters = {
  egos (state) {
    return state.egos
  }
}

const actions = {
  loadEgos ({ commit }) {
    firebase.database().ref('/testes/estadosDoEgo').on('value', snapshot => {
      const obj = snapshot.val()
      const egos = []
      for (const key in obj) {
        egos.push({
          id: key,
          ego: obj[key].ego,
          atitude: obj[key].atitude
        })
      }
      commit('setEgos', egos)
    })
  }
}

const mutations = {
  setEgos (state, payload) {
    state.egos = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

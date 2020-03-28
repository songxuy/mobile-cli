const state = {
  test: 123,
  isMum: false
}

// getters
const getters = {
  test: state => state.test,
  isMum: state => state.isMum
}

// actions
const actions = {
  getTest ({ commit }) {
    commit('SETTEST', 1000)
  }
}

// mutations
const mutations = {
  SETTEST (state, payload) {
    state.test = payload
  },
  SETMUM (state, payload) {
    state.isMum = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

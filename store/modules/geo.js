const state = () => ({ position: {} })
const mutatus = {
  setPosition (state, pos) {
    state.position = pos
  }
}
const actions = {
  setPosition ({ commit }, pos) {
    commit('setPosition', pos)
  }
}
export default { namespace: true, state, mutatus, actions }

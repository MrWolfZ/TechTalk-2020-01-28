import Vuex from 'vuex'

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    counterTimesTwo: state => state.counter * 2
  },
  mutations: {
    increment: state => state.counter += 1,
    decrement: state => state.counter -= 1,
  },
})

store.subscribe(() => console.log(store.getters.counterTimesTwo))

store.commit('increment')
store.commit('increment')
store.commit('decrement')

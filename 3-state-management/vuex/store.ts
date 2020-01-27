import Vuex from 'vuex'

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    counterTimesTwo: state => state.counter * 2,
    counterTimes: state => (amount: number) => state.counter * amount
  },
  mutations: {
    increment: state => state.counter += 1,
    incrementBy: (state, amount: number) => state.counter += amount,
    decrement: state => state.counter -= 1,
  },
})

store.subscribe(() => console.log(store.getters.counterTimesTwo))

store.commit('increment')
store.commit('incrementBy', 5)
store.commit('decrement')






















import { Module } from 'vuex'

const syncCounter: Module<{ counter: number }, any> = {
  namespaced: true,
  state: {
    counter: 0
  },
  getters: {
    counterTimesTwo: state => state.counter * 2
  },
  mutations: {
    increment: state => state.counter += 1,
    incrementBy: (state, amount: number) => state.counter += amount,
    decrement: state => state.counter -= 1,
  },
};

const asyncCounter: Module<{ asyncCounter: number }, any> = {
  namespaced: true,
  state: {
    asyncCounter: 0
  },
  mutations: {
    incrementBy: (state, amount: number) => state.asyncCounter += amount,
  },
  actions: {
    incrementByAsync: async context => {
      console.log(`current counter value: ${context.state.asyncCounter}`)
      await new Promise(resolve => setTimeout(resolve, 1000))
      context.commit('incrementBy', 5)
    }
  },
};

export const modularStore = new Vuex.Store({
  modules: {
    syncCounter,
    asyncCounter,
  },
})

modularStore.subscribe(() => console.log(modularStore.getters.syncCounter.counterTimesTwo))
modularStore.subscribe(() => console.log(modularStore.state.asyncCounter))

modularStore.commit('syncCounter/increment')
modularStore.commit('syncCounter/incrementBy', 5)
modularStore.commit('asyncCounter/increment')
modularStore.dispatch('asyncCounter/incrementByAsync', 5)

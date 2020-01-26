import { createModel, init, RematchDispatch, RematchRootState } from '@rematch/core'

const counter = createModel({
  state: 0,
  reducers: {
    increment(state) {
      return state + 1
    },
    incrementBy(state, amount: number) {
      return state + amount
    },
    decrement(state) {
      return state - 1
    },
  },
})

const store = init({
  models: {
    counter,
  },
})

const { dispatch } = store

store.subscribe(() => console.log(store.getState()))

dispatch.counter.increment()
dispatch.counter.incrementBy(5)
dispatch.counter.decrement()

































const asyncCounter = createModel({
  state: 0,
  reducers: {
    incrementBy(state, amount: number) {
      return state + amount
    },
  },
  effects: dispatch => ({
    async incrementByAsync(amount: number, rootState) {
      console.log(`current counter value: ${(rootState as RootState).asyncCounter}`)
      await new Promise(resolve => setTimeout(resolve, 1000))
      castDispatch(dispatch).asyncCounter.incrementBy(amount)
    },
  }),
})

const models = {
  asyncCounter,
}

const asyncStore = init({ models })

const { dispatch: dispatch2 } = asyncStore

type AppDispatch = typeof dispatch2
type RootState = RematchRootState<typeof models>

const castDispatch = (dispatch: RematchDispatch) => dispatch as AppDispatch

dispatch2.asyncCounter.incrementByAsync(5)


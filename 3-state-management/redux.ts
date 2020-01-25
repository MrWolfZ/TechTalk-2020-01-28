import { createStore } from 'redux'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
  type: INCREMENT
} as const)

export const decrement = () => ({
  type: DECREMENT
} as const)

export const counterReducer = (state = 0, action: { type: typeof INCREMENT | typeof DECREMENT }) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

export const store = createStore(counterReducer)

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())

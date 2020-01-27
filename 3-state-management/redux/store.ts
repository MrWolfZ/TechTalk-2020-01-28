import { Action, applyMiddleware, createStore, combineReducers } from 'redux'

const INCREMENT = 'INCREMENT'
const INCREMENT_BY = 'INCREMENT_BY'
const DECREMENT = 'DECREMENT'

export const increment = () => ({
  type: INCREMENT
} as const)

export const incrementBy = (amount: number) => ({
  type: INCREMENT_BY,
  amount,
} as const)

export const decrement = () => ({
  type: DECREMENT
} as const)

type Actions = ReturnType<typeof increment | typeof incrementBy | typeof decrement>

const counterReducer = (state = 0, action: Actions) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case INCREMENT_BY:
      return state + action.amount
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

export const appReducer = combineReducers({
  counter: counterReducer,
})

export const store = createStore(appReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch(increment())
store.dispatch(incrementBy(5))
store.dispatch(decrement())































import thunk, { ThunkAction, ThunkMiddleware } from 'redux-thunk'

export type RootState = ReturnType<typeof appReducer>
type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>

const asyncStore = createStore(appReducer, applyMiddleware(thunk as ThunkMiddleware<RootState, Actions>))

const incrementByAsync = (amount: number): AppThunk => async (dispatch, getState) => {
  console.log(`current counter value: ${getState().counter}`)
  await new Promise(resolve => setTimeout(resolve, 1000))
  dispatch(incrementBy(amount))
}

asyncStore.dispatch(incrementByAsync(5))

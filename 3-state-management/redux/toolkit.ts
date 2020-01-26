import { Action, createAction, createReducer, createSlice, combineReducers, configureStore } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

const inc = createAction('INC')
const incBy = createAction<number>('INC_BY')
const dec = createAction('DEC')

const counterReducer = createReducer(0, {
  [inc.type]: state => state + 1,
  [incBy.type]: (state, amount: number) => state + amount,
  [dec.type]: state => state - 1
})

const appReducer = combineReducers({
  counter: counterReducer,
})

const store = configureStore({
  reducer: appReducer,
})

store.subscribe(() => console.log(store.getState()))

store.dispatch(inc())
store.dispatch(incBy(5))
store.dispatch(dec())























const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    incrementBy: (state, action: { payload: number }) => state + action.payload,
    decrement: state => state - 1
  }
})

const { increment, incrementBy, decrement } = counterSlice.actions

const appReducer2 = combineReducers({
  counter: counterSlice.reducer,
})

const store2 = configureStore({ reducer: appReducer2 })

store2.dispatch(increment())
store2.dispatch(incrementBy(5))
store2.dispatch(decrement())


























type RootState = ReturnType<typeof appReducer>
type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>

const incrementByAsync = (amount: number): AppThunk => async (dispatch, getState) => {
  console.log(`current counter value: ${getState().counter}`)
  await new Promise(resolve => setTimeout(resolve, 1000))
  dispatch(incrementBy(amount))
}

store2.dispatch(incrementByAsync(5))

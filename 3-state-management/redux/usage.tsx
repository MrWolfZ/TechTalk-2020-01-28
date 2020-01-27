import * as React from 'react'
import { Provider, useDispatch, useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux'
import { render } from 'react-dom'
import { store, RootState, increment, incrementBy } from './store'

const useSelector = useReduxSelector as TypedUseSelectorHook<RootState>

export const Counter = () => {
  const dispatch = useDispatch()
  const value = useSelector(store => store.counter)
  const valuePlusFive = useSelector(store => store.counter + 5)

  return (
    <>
      <span>value: {value}</span>
      <br />
      <span>value + 5: {valuePlusFive}</span>
      <br />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <button onClick={() => dispatch(incrementBy(5))}>Increment by 5</button>
    </>
  )
}

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root'),
)

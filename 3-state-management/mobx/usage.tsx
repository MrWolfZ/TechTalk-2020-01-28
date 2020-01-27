import * as React from 'react'
import { observer } from 'mobx-react'
import { render } from 'react-dom'
import { CounterStore } from './counter-store'

export const Counter = observer(({ counter }: { counter: CounterStore }) => {
  return (
    <>
      <span>value: {counter.count}</span>
      <br />
      <span>value + 5: {counter.count + 5}</span>
      <br />
      <button onClick={() => counter.increment()}>Increment</button>
      <br />
      <button onClick={() => counter.incrementBy(5)}>Increment by 5</button>
    </>
  )
})

const counterStore = new CounterStore()

render(
  <Counter counter={counterStore} />,
  document.getElementById('root'),
)

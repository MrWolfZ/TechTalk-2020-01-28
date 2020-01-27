import { useSimplux } from '@simplux/react'
import * as React from 'react'
import { counter } from './counter'

export const Counter = () => {
  const value = useSimplux(counter.value)
  const valuePlusFive = useSimplux(counter.plus, 5)

  return (
    <>
      <span>value: {value}</span>
      <br />
      <span>value + 5: {valuePlusFive}</span>
      <br />
      <button onClick={counter.increment}>Increment</button>
      <br />
      <button onClick={() => counter.incrementBy(5)}>Increment by 5</button>
    </>
  )
}

/// <reference types="jest" />

import { cleanup, fireEvent, render } from '@testing-library/react'
import * as React from 'react'
import { Store, createStore } from 'redux'
import { Provider } from 'react-redux'
import { Counter } from './usage'
import { RootState, appReducer, increment } from './store'

describe(Counter.name, () => {
  afterEach(cleanup)

  let store: Store<RootState>
  let dispatchSpy: jest.SpyInstance

  beforeEach(() => {
    store = createStore(appReducer, {
      counter: 10,
    })

    dispatchSpy = jest.spyOn(store, 'dispatch')
  })

  it('displays the value', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )

    expect(getByText(/value:\s*10/g)).toBeDefined()
  })

  it('increments the counter when the "Increment" button is clicked', () => {
    const { getByText } = render(<Counter />)

    fireEvent.click(getByText('Increment'))

    expect(dispatchSpy).toHaveBeenCalledWith(increment())
  })
})

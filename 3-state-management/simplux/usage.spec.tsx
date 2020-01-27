/// <reference types="jest" />

import { clearAllSimpluxMocks, mockModuleState, mockMutation } from '@simplux/testing'
import { cleanup, fireEvent, render } from '@testing-library/react'
import * as React from 'react'
import { Counter } from './usage'
import { counter } from './counter'

describe(Counter.name, () => {
  afterEach(cleanup)
  afterEach(clearAllSimpluxMocks)

  it('displays the value', () => {
    mockModuleState(counter, { value: 10 })

    const { getByText } = render(<Counter />)

    expect(getByText(/value:\s*10/g)).toBeDefined()
  })

  it('increments the counter when the "Increment" button is clicked', () => {
    mockModuleState(counter, { value: 10 })

    const [incrementMock] = mockMutation(counter.increment, jest.fn())

    const { getByText } = render(<Counter />)

    fireEvent.click(getByText('Increment'))

    expect(incrementMock).toHaveBeenCalled()
  })
})

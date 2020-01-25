import * as React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Button } from './button'

describe(Button.name, () => {
  afterEach(cleanup)

  it('sets the class for the color', () => {
    const color = 'success'

    const { container } = render(
      <Button color={color} onClick={() => void 0} />
    )

    const className = container.querySelector('button')!.className
    expect(className).toBe(color)
  })
})

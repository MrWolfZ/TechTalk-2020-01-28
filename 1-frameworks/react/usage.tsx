import * as React from 'react'
import { Button, SuccessButton } from './button/button';

export function render() {
  return (
    <>
      <Button
        color='success'
        onClick={() => window.alert('button 1 clicked')}
      >
        Button 1
      </Button>

      <SuccessButton
        onClick={() => window.alert('button 2 clicked')}
      >
        Button 2
      </SuccessButton>
    </>
  )
}

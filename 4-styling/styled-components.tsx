import * as React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  border: 1px solid black;
`

export const SuccessButton = styled(Button)`
  background-color: green;
`;

export const WarnButton = styled(Button)`
  background-color: yellow;
`;

export function render() {
  return (
    <>
      <SuccessButton onClick={() => void 0}></SuccessButton>
    </>
  )
}

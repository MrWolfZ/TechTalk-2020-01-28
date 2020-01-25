import * as React from 'react'

export interface ButtonProps {
  color: 'success' | 'warn' | 'danger'
  onClick: () => void
}

export const Button: React.SFC<ButtonProps> = ({ color, onClick, children }) => (
  <button
    style={{ backgroundColor: getBackgroundColor(color) }}
    onClick={onClick}
  >
    {children}
  </button>
)

function getBackgroundColor(color: 'success' | 'warn' | 'danger') {
  return color === 'success' ? 'green' : color === 'danger' ? 'yellow' : 'red'
}




































export type SuccessButtonProps = Omit<ButtonProps, 'color'>
export const SuccessButton: React.SFC<SuccessButtonProps> = props =>
  <Button color='success' {...props} />

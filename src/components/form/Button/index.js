import React from 'react'
import {StyledButton} from 'components/globalStyles/button.styled'

export default function Button({
  bg,
  children,
  color,
  type = 'button',
  disabled
}) {
  return (
    <StyledButton bg={bg} color={color} type={type} disabled={disabled}>
      {children}
    </StyledButton>
  )
}

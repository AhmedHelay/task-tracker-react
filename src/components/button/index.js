import React from 'react'
import {StyledButton} from './components'

const dangerBg = '#db4437'
const dangerColor = '#000'
const dangerHover = '#d45555'

const submitBg = '#08d'
const submitColor = '#fff'
const submitHover = '#006db1'

export function DangerButton({type, disabled, onClick, children}) {
  return (
    <StyledButton
      bg={dangerBg}
      color={dangerColor}
      type={type}
      hover={dangerHover}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
}

export function SubmitButton({type, disabled, onClick, children}) {
  return (
    <StyledButton
      bg={submitBg}
      color={submitColor}
      type={type}
      hover={submitHover}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
}

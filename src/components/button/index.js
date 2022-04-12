import React from 'react'
import {StyledButton} from './components'

const submitBg = '#6400f7'
const submitColor = '#ffffff'
const submitHover = '#4600ad'
const submitDisabled = '#280063'

const infoBg = '#786d68'
const infoColor = '#ffffff'
const infoHover = '#544c49'
const infoDisabled = '#24211f'

export function SubmitButton({disabled, onClick, children}) {
  return (
    <StyledButton
      bg={disabled ? submitDisabled : submitBg}
      color={submitColor}
      type="submit"
      hover={disabled ? submitDisabled : submitHover}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
}

export function InfoButton({disabled, onClick, children}) {
  return (
    <StyledButton
      bg={disabled ? infoDisabled : infoBg}
      color={infoColor}
      type="button"
      hover={disabled ? infoDisabled : infoHover}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
}

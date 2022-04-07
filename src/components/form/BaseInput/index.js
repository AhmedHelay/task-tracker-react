import React from 'react'
import {FormBaseInput, FormInputError, FormInputLabel} from './components'

export function BaseInput({label, error, children}) {
  return (
    <>
      <FormInputLabel>{label}</FormInputLabel>
      <FormBaseInput>{children}</FormBaseInput>
      <FormInputError> {error}</FormInputError>
    </>
  )
}

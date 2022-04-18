import React from 'react'
import {
  Container,
  FormBaseInput,
  FormInputError,
  FormInputLabel
} from './components'

export function BaseInput({label, error, children}) {
  return (
    <Container>
      <FormInputLabel>{label}</FormInputLabel>
      <FormBaseInput $isError={error}>{children}</FormBaseInput>
      <FormInputError> {error}</FormInputError>
    </Container>
  )
}

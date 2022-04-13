import React from 'react'

import {
  Form,
  FormTitle,
  FormSubmitMessage,
  FormPageWrapper,
  FormInputsContainer
} from './components'

export default function FormLayout({title, success, error, children}) {
  return (
    <FormPageWrapper>
      <Form>
        <FormTitle>{title}</FormTitle>
        {success && (
          <FormSubmitMessage color="#5aed73">{success}</FormSubmitMessage>
        )}
        {error && (
          <FormSubmitMessage color="#eb3333">{error}</FormSubmitMessage>
        )}
        <FormInputsContainer>{children}</FormInputsContainer>
      </Form>
    </FormPageWrapper>
  )
}

import React from 'react'

import {
  Form,
  FormTitle,
  FormSubmitMessage,
  FormPageWrapper,
  FormInputsContainer
} from './components'
import DotLoader from 'react-spinners/DotLoader'

export default function FormLayout({title, loading, success, error, children}) {
  return (
    <FormPageWrapper>
      {loading ? (
        <DotLoader color={'#6400f7'} loading={loading} size={50} />
      ) : (
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
      )}
    </FormPageWrapper>
  )
}

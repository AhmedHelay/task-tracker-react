import React from 'react'

import {Form, FormTitle, FormInputscontainer} from './components'

export default function FormLayout({title, children}) {
  return (
    <Form>
      <FormTitle>{title}</FormTitle>
      <FormInputscontainer>{children}</FormInputscontainer>
    </Form>
  )
}

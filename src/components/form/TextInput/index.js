import React from 'react'
import {BaseInput} from '../BaseInput'
import {FormTextInput} from './components'

export default function TextInput({label, error, ...props}) {
  return (
    <>
      <BaseInput label={label} error={error}>
        <FormTextInput {...props}></FormTextInput>
      </BaseInput>
    </>
  )
}

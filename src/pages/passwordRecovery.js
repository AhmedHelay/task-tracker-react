import React, {useEffect, useState} from 'react'

import AuthorizeComponent from 'components/AuthorizeComponent'
import useRequestPasswordRecovery from 'hooks/mutations/users/useRequestPasswordRecovery'

import FormLayout from 'components/layouts/FormLayout'
import TextInput from 'components/form/TextInput'
import {SubmitButton} from 'components/button/'
import RedirectMessage from 'components/form/RedirectMessage'

import emailValidator from 'validators/formValidators/inputValidators/emailValidator'

function PasswordRecovery() {
  const {requestPasswordRecovery, data, loading} = useRequestPasswordRecovery()
  const responeMessage = data?.requestPasswordRecovery.message

  const [inputState, setEmailInput] = useState('')
  const [errorState, setErrorState] = useState(undefined)

  function handleEvent(event) {
    setEmailInput(event.target.value)
  }

  function isMessageSuccess(message) {
    return message === 'Instructions sent'
  }

  function isMessageError(message) {
    return message === 'Record not found'
  }

  async function handleSubmitClick() {
    if (inputState && !errorState) {
      await requestPasswordRecovery(inputState)
    }
  }

  useEffect(() => {
    setErrorState(emailValidator(inputState))
  }, [inputState])

  return (
    <FormLayout
      title="Password Recovery"
      loading={loading}
      success={
        responeMessage && isMessageSuccess(responeMessage) && responeMessage
      }
      error={responeMessage && isMessageError(responeMessage) && responeMessage}
    >
      <TextInput
        id="email"
        label="Email"
        value={inputState}
        error={errorState}
        onBlur={(e) => handleEvent(e)}
        onChange={(e) => handleEvent(e)}
      />
      <SubmitButton onClick={handleSubmitClick}>Recover Password</SubmitButton>
      <RedirectMessage textAction="Back to Login" path="/login" />
    </FormLayout>
  )
}

export default AuthorizeComponent(PasswordRecovery, true, '/')

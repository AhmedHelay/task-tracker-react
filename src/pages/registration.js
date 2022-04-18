import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import useAuthUser from 'global/AuthUser'
import useSignUp from 'hooks/mutations/auth/useSignUp'

import DefaultLayout from 'components/layouts/DefaultLayout'
import FormLayout from 'components/layouts/FormLayout'
import TextInput from 'components/form/TextInput'
import PasswordInput from 'components/form/PasswordInput'

import checkEmptyState from 'utils/forms/checkEmptyState'
import registrationFormValidator from 'validators/formValidators/registrationFormValidator'
import handleFormChange from 'utils/forms/handleChange'
import RedirectMessage from 'components/form/RedirectMessage'
import {SubmitButton} from 'components/button'
import setEmptyStateErrors from 'utils/forms/setEmptyStateErrors'

export default function Registration() {
  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  }
  const [formState, setFormState] = useState(initialValues)
  const [errorsState, setErrorsState] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const {user, isLoading} = useAuthUser()
  const {signUp, loading, error} = useSignUp()

  useEffect(() => {
    setErrorsState((errorsState) =>
      registrationFormValidator(formState, errorsState)
    )
  }, [formState])

  useEffect(() => {
    error && setIsSubmit(false)
  }, [error])

  function handleEvent(event) {
    handleFormChange(event, formState, setFormState)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setEmptyStateErrors(formState, errorsState, setErrorsState)
    if (formState.email && formState.password && checkEmptyState(errorsState)) {
      setIsSubmit(true)
      await signUp(
        formState.firstName,
        formState.lastName,
        formState.email,
        formState.password
      )
    }
  }

  const navigate = useNavigate()
  useEffect(() => {
    if (isLoading === false && user) {
      navigate('/', {replace: true})
    }
  }, [user, isLoading, navigate])

  return (
    <DefaultLayout>
      <FormLayout
        title="Registration"
        loading={loading}
        error={error && error.message}
      >
        <TextInput
          id="firstName"
          label="First Name"
          value={formState.firstName}
          error={errorsState.firstName}
          onBlur={(e) => handleEvent(e)}
          onChange={(e) => handleEvent(e)}
        />
        <TextInput
          id="lastName"
          label="Last Name"
          value={formState.lastName}
          error={errorsState.lastName}
          onBlur={(e) => handleEvent(e)}
          onChange={(e) => handleEvent(e)}
        />
        <TextInput
          id="email"
          label="Email"
          value={formState.email}
          error={errorsState.email}
          onBlur={(e) => handleEvent(e)}
          onChange={(e) => handleEvent(e)}
        />
        <PasswordInput
          id="password"
          label="Password"
          value={formState.password}
          error={errorsState.password}
          onBlur={(e) => handleEvent(e)}
          onChange={(e) => handleEvent(e)}
          autoComplete="off"
        />
        <SubmitButton disabled={isSubmit} onClick={handleSubmit}>
          Create Account
        </SubmitButton>
        <RedirectMessage
          text="Already a memeber?"
          textAction="Login NOW!"
          path="/login"
        />
      </FormLayout>
    </DefaultLayout>
  )
}

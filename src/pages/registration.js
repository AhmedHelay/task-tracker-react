import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import useAuthUser from 'global/AuthUser'
import useSignUp from 'hooks/mutations/auth/useSignUp'

import DefaultLayout from 'components/layouts/DefaultLayout'
import FormLayout from 'components/layouts/FormLayout'
import TextInput from 'components/form/TextInput'
import PasswordInput from 'components/form/PasswordInput'
import {SubmitButton} from 'components/button/index'

import checkEmptyState from 'utils/forms/checkEmptyState'
import registrationFormValidator from 'validators/formValidators/registrationFormValidator'
import handleFormChange from 'utils/forms/handleChange'

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
  const {signUp} = useSignUp()

  useEffect(() => {
    setErrorsState(registrationFormValidator(formState))
  }, [formState])

  function handleEvent(event) {
    handleFormChange(event, formState, setFormState)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!checkEmptyState(formState) && checkEmptyState(errorsState)) {
      setIsSubmit(true)
      await signUp(
        formState.email,
        formState.password,
        formState.firstName,
        formState.lastName
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
    <DefaultLayout title="Sign Up">
      <FormLayout title="Registration">
        <TextInput
          placeholder="Ahmad"
          id="firstName"
          label="First Name"
          type="text"
          value={formState.firstName}
          error={errorsState.firstName}
          onBlur={(e) => handleEvent(e)}
          onChange={(e) => handleEvent(e)}
          required
        />
        <TextInput
          placeholder="Helaly"
          id="lastName"
          label="Last Name"
          type="text"
          value={formState.lastName}
          error={errorsState.lastName}
          onBlur={(e) => handleEvent(e)}
          onChange={(e) => handleEvent(e)}
          required
        />
        <TextInput
          placeholder="Email"
          id="email"
          label="Email"
          type="text"
          value={formState.email}
          error={errorsState.email}
          onBlur={(e) => handleEvent(e)}
          onChange={(e) => handleEvent(e)}
          required
        />
        <PasswordInput
          placeholder="Password"
          id="password"
          label="Password"
          value={formState.password}
          error={errorsState.password}
          onBlur={(e) => handleEvent(e)}
          onChange={(e) => handleEvent(e)}
          autoComplete="off"
          required
        />
        <SubmitButton
          type="submit"
          hover="#006bad"
          disabled={isSubmit}
          onClick={handleSubmit}
        >
          Create Account
        </SubmitButton>
      </FormLayout>
    </DefaultLayout>
  )
}

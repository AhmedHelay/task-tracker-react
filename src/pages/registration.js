import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import useAuthUser from 'global/AuthUser'
import {SIGN_UP_MUTATION} from 'api/mutations/signUp'
import {useMutation} from '@apollo/client'

import DefaultLayout from 'components/layouts/DefaultLayout'
import FormLayout from 'components/layouts/FormLayout'
import TextInput from 'components/form/TextInput'
import PasswordInput from 'components/form/PasswordInput'
import Button from 'components/form/Button'

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

  const {
    state: {user, isLoading},
    dispatch
  } = useAuthUser()
  const [signUpMutation] = useMutation(SIGN_UP_MUTATION, {
    onCompleted: (data) => {
      dispatch({type: 'loaded', payload: data.signup})
    }
  })

  useEffect(() => {
    setErrorsState(registrationFormValidator(formState))
  }, [formState])

  function handleEvent(event) {
    handleFormChange(event, formState, setFormState)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (checkEmptyState(errorsState)) {
      setIsSubmit(true)
      dispatch({type: 'loading'})
      await signUpMutation({variables: {...formState}})
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
      <FormLayout>
        <TextInput
          placeholder="First name"
          id="firstName"
          label="First Name"
          type="text"
          value={formState.email}
          error={errorsState.email}
          onBlur={(e) => handleEvent(e)}
          onChange={(e) => handleEvent(e)}
          required
        />
        <TextInput
          placeholder="Last name"
          id="Last Name"
          label="Password"
          type="text"
          value={formState.email}
          error={errorsState.email}
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
          value={formState.email}
          error={errorsState.email}
          onBlur={(e) => handleEvent(e)}
          onChange={(e) => handleEvent(e)}
          autoComplete="off"
          required
        />
        <Button
          bg="#0F9D58"
          color="#fff"
          type="submit"
          disabled={isSubmit}
          onClick={handleSubmit}
        >
          Create Account
        </Button>
      </FormLayout>
    </DefaultLayout>
  )
}

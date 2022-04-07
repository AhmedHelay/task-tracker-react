import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import useAuthUser from 'global/AuthUser'
import {SIGN_IN_MUTATION} from 'api/mutations/signIn'
import {useMutation} from '@apollo/client'

import DefaultLayout from 'components/layouts/DefaultLayout'
import FormLayout from 'components/layouts/FormLayout'
import TextInput from 'components/form/TextInput'
import PasswordInput from 'components/form/PasswordInput'
import {SubmitButton} from 'components/button/index'

import checkEmptyState from 'utils/forms/checkEmptyState'
import loginFormValidator from 'validators/formValidators/loginFormValidator'
import handleFormChange from 'utils/forms/handleChange'

export default function Login() {
  const [isSubmit, setIsSubmit] = useState(false)
  const [errorsState, setErrorsState] = useState({})
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })

  const {
    state: {user, isLoading},
    dispatch
  } = useAuthUser()
  const [LoginMutation] = useMutation(SIGN_IN_MUTATION, {
    onCompleted: (data) => {
      dispatch({type: 'loaded', payload: data.signin})
    }
  })

  useEffect(() => {
    setErrorsState(loginFormValidator(formState))
  }, [formState])

  function handleEvent(event) {
    handleFormChange(event, formState, setFormState)
  }

  async function handleLogin(e) {
    e.preventDefault()
    if (checkEmptyState(errorsState)) {
      setIsSubmit(true)
      dispatch({type: 'loading'})
      await LoginMutation({variables: {...formState}})
    }
  }

  const navigate = useNavigate()
  useEffect(() => {
    if (isLoading === false && user) {
      navigate('/', {replace: true})
    }
  }, [user, isLoading, navigate])

  return (
    <DefaultLayout title="Login">
      <FormLayout title="Login">
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
        <SubmitButton type="submit" disabled={isSubmit} onClick={handleLogin}>
          Login
        </SubmitButton>
      </FormLayout>
    </DefaultLayout>
  )
}

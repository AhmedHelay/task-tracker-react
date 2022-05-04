import {useState, useEffect} from 'react'

import useSignIn from 'hooks/mutations/auth/useSignIn'

import DefaultLayout from 'components/layouts/DefaultLayout'
import FormLayout from 'components/layouts/FormLayout'
import TextInput from 'components/form/TextInput'
import PasswordInput from 'components/form/PasswordInput'

import checkEmptyState from 'utils/forms/checkEmptyState'
import setEmptyStateErrors from 'utils/forms/setEmptyStateErrors'
import loginFormValidator from 'validators/formValidators/loginFormValidator'
import handleFormChange from 'utils/forms/handleChange'
import RedirectMessage from 'components/form/RedirectMessage'
import {SubmitButton} from 'components/button'
import AuthorizeComponent from 'components/AuthorizeComponent'

function Login() {
  const [isSubmit, setIsSubmit] = useState(false)
  const [errorsState, setErrorsState] = useState({})
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })

  const {signIn, loading, error} = useSignIn()

  useEffect(() => {
    setErrorsState((errorsState) => loginFormValidator(formState, errorsState))
  }, [formState])

  useEffect(() => {
    error && setIsSubmit(false)
  }, [error])

  function handleEvent(event) {
    handleFormChange(event, formState, setFormState)
  }

  async function handleLogin(e) {
    e.preventDefault()
    setEmptyStateErrors(formState, errorsState, setErrorsState)
    if (formState.email && formState.password && checkEmptyState(errorsState)) {
      setIsSubmit(true)
      await signIn(formState)
    }
  }

  return (
    <DefaultLayout loading={loading}>
      <FormLayout title="Login" error={error && error.message}>
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
          recovery={true}
          autoComplete="off"
        />
        <SubmitButton disabled={isSubmit} onClick={handleLogin}>
          Login
        </SubmitButton>
        <RedirectMessage
          text="Not a memeber?"
          textAction="Register NOW!"
          path="/registration"
        />
      </FormLayout>
    </DefaultLayout>
  )
}

export default (
  <AuthorizeComponent Component={Login} onUserLogedIn={true} redirectTo="/" />
)

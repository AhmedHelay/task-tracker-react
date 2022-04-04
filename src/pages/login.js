import {useState, useEffect} from 'react'

import {Container} from 'components/styles/container.styled'
import {Button} from 'components/styles/button.styled'
import {CardWrapper, CardBody} from 'components/styles/card'
import {FormInput} from 'components/styles/form/formInput'
import {loginFormValidator} from '../validators/loginFormValidator'

import DefaultLayout from 'components/layouts/defaultLayout'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import useAuthUser from 'global/AuthUser'
import {SIGN_IN_MUTATION} from 'api/mutations/signIn'
import {useMutation} from '@apollo/client'
import {useNavigate} from 'react-router-dom'
import isEmptyState from 'utils/forms/isEmptyState'
import {handleFormChange} from 'utils/forms/handleChange'
import {SmallError} from 'components/styles/smallErrorMessage.styled'
const eyeOn = <FontAwesomeIcon icon={faEye} />
const eyeOff = <FontAwesomeIcon icon={faEyeSlash} />

function Login() {
  const [passwordShown, setPasswordShown] = useState(false)
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

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown)
  }

  useEffect(() => {
    setErrorsState(loginFormValidator(formState))
  }, [formState])

  function handleEvent(event) {
    handleFormChange(event, formState, setFormState)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (isEmptyState(errorsState)) {
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
      <Container>
        <CardWrapper>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <FormInput
                placeholder="Email"
                id="email"
                type="text"
                value={formState.email}
                error={errorsState.email}
                onBlur={(e) => handleEvent(e)}
                onChange={(e) => handleEvent(e)}
                required
              />
              <SmallError>{errorsState.email}</SmallError>
              <FormInput
                placeholder="Password"
                id="password"
                type={passwordShown ? 'text' : 'password'}
                value={formState.password}
                error={errorsState.password}
                onBlur={(e) => handleEvent(e)}
                onChange={(e) => handleEvent(e)}
                autoComplete="off"
                required
              />
              <SmallError>{errorsState.password}</SmallError>
              <i onClick={togglePasswordVisibility}>
                {passwordShown ? eyeOn : eyeOff}
              </i>
              <Button
                type="submit"
                bg="#0F9D58"
                color="#fff"
                disabled={isLoading}
              >
                Login
              </Button>
              <Button
                bg="#0F9D58"
                color="#fff"
                onClick={() => navigate('/registration')}
              >
                Registration
              </Button>
            </form>
          </CardBody>
        </CardWrapper>
      </Container>
    </DefaultLayout>
  )
}

export default Login

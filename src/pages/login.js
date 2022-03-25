import {useState, useEffect} from 'react'

import {Container} from './../components/styles/container.styled'
import {Button} from './../components/styles/button.styled'
import {CardWrapper, CardBody, CardInput} from './../components/styles/card'
import {SmallError} from '../components/styles/small_error_message.styled'
import {LoginFormValidator} from '../validators/login_form_validator'

import DefaultLayout from './../components/layouts/default_layout'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import useAuthUser from 'global/AuthUser'
import {SIGN_IN_MUTATION} from 'api/mutations/sign_in'
import {useMutation} from '@apollo/client'
import {useNavigate} from 'react-router-dom'
import isStateFilled from '../utils/errorChecker'
const eyeOn = <FontAwesomeIcon icon={faEye} />
const eyeOff = <FontAwesomeIcon icon={faEyeSlash} />

function Login() {
  const [passwordShown, setPasswordShown] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const [formErrors, setFormErrors] = useState({})

  const {dispatch, state: AuthUser} = useAuthUser()
  const [signIn, {data}] = useMutation(SIGN_IN_MUTATION)

  const navigate = useNavigate()
  useEffect(() => {
    if (AuthUser.me) {
      navigate('/profile', {replace: true})
    }
  }, [AuthUser.me, navigate])

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown)
  }

  useEffect(() => {
    setFormErrors(LoginFormValidator(formValues))
  }, [formValues])

  function handleEvent(event) {
    const {value, id} = event.target
    if (event.type === 'blur') {
      setFormValues({...formValues, [id]: value})
    } else if (event.type === 'change') {
      setFormValues({...formValues, [id]: value.trim()})
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (isStateFilled(formErrors)) {
      setIsSubmit(true)
      dispatch({type: 'loading'})
      await signIn({variables: {...formValues}})
      dispatch({type: 'loaded', payload: data})
    }
  }

  return (
    <DefaultLayout title="Login">
      <Container>
        <CardWrapper>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <CardInput
                placeholder="Email"
                id="email"
                type="text"
                value={formValues.email}
                onBlur={(e) => handleEvent(e)}
                onChange={(e) => handleEvent(e)}
                required
              />
              <SmallError>{formErrors.email}</SmallError>
              <CardInput
                placeholder="Password"
                id="password"
                type={passwordShown ? 'text' : 'password'}
                value={formValues.password}
                onBlur={(e) => handleEvent(e)}
                onChange={(e) => handleEvent(e)}
                required
              />
              <SmallError>{formErrors.password}</SmallError>
              <i onClick={togglePasswordVisiblity}>
                {passwordShown ? eyeOn : eyeOff}
              </i>
              <Button
                type="submit"
                bg="#0F9D58"
                color="#fff"
                disabled={isSubmit}
              >
                Login
              </Button>
            </form>
          </CardBody>
        </CardWrapper>
      </Container>
    </DefaultLayout>
  )
}

export default Login

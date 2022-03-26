import {useEffect, useState} from 'react'

import {Container} from 'components/styles/container.styled'
import {Button} from 'components/styles/button.styled'
import {SmallError} from 'components/styles/small_error_message.styled'
import {CardWrapper, CardBody, CardInput} from '../components/styles/card'
import DefaultLayout from 'components/layouts/default_layout'
import {RegistrationFormValidator} from 'validators/registration_form_validator'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import useAuthUser from 'global/AuthUser'
import {useNavigate} from 'react-router-dom'
import {SIGN_UP_MUTATION} from 'api/mutations/sign_up'
import {useMutation} from '@apollo/client'
import isErrorStateEmpty from 'utils/errorChecker'
const eyeOn = <FontAwesomeIcon icon={faEye} />
const eyeOff = <FontAwesomeIcon icon={faEyeSlash} />

function Registration() {
  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  }
  const [passwordShown, setPasswordShown] = useState(false)
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [registrationError, setRegistrationError] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  const {dispatch, state: AuthUser} = useAuthUser()
  const [signUp, {data}] = useMutation(SIGN_UP_MUTATION)

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown)
  }

  useEffect(() => {
    setFormErrors(RegistrationFormValidator(formValues))
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
    if (isErrorStateEmpty(formErrors)) {
      setIsSubmit(true)
      dispatch({type: 'loading'})
      try {
        await signUp({variables: {...formValues}})
        dispatch({type: 'loaded', payload: data})
      } catch (e) {
        setRegistrationError(e.extensions.detail)
        setIsSubmit(false)
      }
    }
  }

  const navigate = useNavigate()
  useEffect(() => {
    if (AuthUser.me) {
      navigate('/', {replace: true})
    }
  }, [AuthUser.me, navigate])

  return (
    <DefaultLayout title="Sign Up">
      <Container>
        <CardWrapper>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <SmallError>{registrationError}</SmallError>
              <CardInput
                placeholder="First name"
                id="firstName"
                type="text"
                value={formValues.firstName}
                onChange={(e) => handleEvent(e)}
                required
              />
              <SmallError>{formErrors.firstName}</SmallError>
              <CardInput
                placeholder="Last name"
                id="lastName"
                type="text"
                value={formValues.lastName}
                onChange={(e) => handleEvent(e)}
                required
              />
              <SmallError>{formErrors.lastName}</SmallError>
              <CardInput
                placeholder="Email"
                id="email"
                type="text"
                value={formValues.email}
                onChange={(e) => handleEvent(e)}
                required
              />
              <SmallError>{formErrors.email}</SmallError>
              <CardInput
                placeholder="Password"
                id="password"
                type={passwordShown ? 'text' : 'password'}
                onChange={(e) => handleEvent(e)}
                required
              />
              <SmallError>{formErrors.password}</SmallError>
              <i onClick={togglePasswordVisibility}>
                {passwordShown ? eyeOn : eyeOff}
              </i>
              <Button
                bg="#0F9D58"
                color="#fff"
                type="submit"
                disabled={isSubmit}
              >
                Create Account
              </Button>
            </form>
          </CardBody>
        </CardWrapper>
      </Container>
    </DefaultLayout>
  )
}

export default Registration

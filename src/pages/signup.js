import {useEffect, useState} from 'react'

import {Container} from '../components/styles/container.styled'
import {Button} from '../components/styles/button.styled'
import {SmallError} from '../components/styles/small_error_message.styled'
import {CardWrapper, CardBody, CardInput} from '../components/styles/card'
import DefaultLayout from './../components/layouts/default_layout'
import {SignUpFormValidator} from '../validators/signup_form_validator'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import useAuthUser from 'global/AuthUser'
import {useNavigate} from 'react-router-dom'
import {SIGN_UP_MUTATION} from 'api/mutations/sign_up'
import {useMutation} from '@apollo/client'
import isStateFilled from 'utils/errorChecker'
const eyeOn = <FontAwesomeIcon icon={faEye} />
const eyeOff = <FontAwesomeIcon icon={faEyeSlash} />

function Signup() {
  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const [passwordShown, setPasswordShown] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown)
  }

  const {dispatch, state: AuthUser} = useAuthUser()
  const [signUp, {data}] = useMutation(SIGN_UP_MUTATION)

  useEffect(() => {
    setFormErrors(SignUpFormValidator(formValues))
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
      await signUp({variables: {...formValues}})
      dispatch({type: 'loaded', payload: data})
    }
  }

  const navigate = useNavigate()
  useEffect(() => {
    if (AuthUser.me) {
      navigate('/profile', {replace: true})
    }
  }, [AuthUser.me, navigate])

  return (
    <DefaultLayout title="Sign Up">
      <Container>
        <CardWrapper>
          <CardBody>
            <form onSubmit={handleSubmit}>
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

export default Signup

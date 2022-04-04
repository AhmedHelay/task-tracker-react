import {useEffect, useState} from 'react'

import {Container} from 'components/styles/container.styled'
import {Button} from 'components/styles/button.styled'
import {SmallError} from 'components/styles/small_error_message.styled'
import {CardWrapper, CardBody} from 'components/styles/card'
import {FormInput} from 'components/styles/form/form_input'
import DefaultLayout from 'components/layouts/default_layout'
import {RegistrationFormValidator} from 'validators/registration_form_validator'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import useAuthUser from 'global/AuthUser'
import {useNavigate} from 'react-router-dom'
import {SIGN_UP_MUTATION} from 'api/mutations/sign_up'
import {useMutation} from '@apollo/client'
import StateEmpty from 'utils/forms/state_empty'
import {handleFormChange} from 'utils/forms/handleChange'
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

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown)
  }

  useEffect(() => {
    setFormErrors(RegistrationFormValidator(formValues))
  }, [formValues])

  function handleEvent(event) {
    handleFormChange(event, formValues, setFormValues)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (StateEmpty(formErrors)) {
      setIsSubmit(true)
      dispatch({type: 'loading'})
      await signUpMutation({variables: {...formValues}})
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
      <Container>
        <CardWrapper>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <FormInput
                placeholder="First name"
                id="firstName"
                type="text"
                value={formValues.firstName}
                onChange={(e) => handleEvent(e)}
                required
              />
              <SmallError>{formErrors.firstName}</SmallError>
              <FormInput
                placeholder="Last name"
                id="lastName"
                type="text"
                value={formValues.lastName}
                onChange={(e) => handleEvent(e)}
                required
              />
              <SmallError>{formErrors.lastName}</SmallError>
              <FormInput
                placeholder="Email"
                id="email"
                type="text"
                value={formValues.email}
                onChange={(e) => handleEvent(e)}
                required
              />
              <SmallError>{formErrors.email}</SmallError>
              <FormInput
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

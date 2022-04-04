import {useEffect, useState} from 'react'

import {Container} from 'components/styles/container.styled'
import {Button} from 'components/styles/button.styled'
import {SmallError} from 'components/styles/smallErrorMessage.styled'
import {CardWrapper, CardBody} from 'components/styles/card'
import {FormInput} from 'components/styles/form/formInput'
import DefaultLayout from 'components/layouts/defaultLayout'
import {registrationFormValidator} from 'validators/registrationFormValidator'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import useAuthUser from 'global/AuthUser'
import {useNavigate} from 'react-router-dom'
import {SIGN_UP_MUTATION} from 'api/mutations/signUp'
import {useMutation} from '@apollo/client'
import isEmptyState from 'utils/forms/isEmptyState'
import {handleFormChange} from 'utils/forms/handleChange'
const eyeOn = <FontAwesomeIcon icon={faEye} />
const eyeOff = <FontAwesomeIcon icon={faEyeSlash} />

const INITIAL_VALUES = {
  email: '',
  firstName: '',
  lastName: '',
  password: ''
}

function Registration() {
  const [passwordShown, setPasswordShown] = useState(false)
  const [formValues, setFormValues] = useState(INITIAL_VALUES)
  const [formErrors, setFormErrors] = useState({})

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
    setFormErrors(registrationFormValidator(formValues))
  }, [formValues])

  function handleEvent(event) {
    handleFormChange(event, formValues, setFormValues)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (isEmptyState(formErrors)) {
      dispatch({type: 'loading'})
      await signUpMutation({variables: formValues})
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
                disabled={isLoading}
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

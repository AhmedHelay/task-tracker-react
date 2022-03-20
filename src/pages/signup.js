import {useEffect, useState} from 'react'

import {Container} from '../components/styles/container.styled'
import {Button} from '../components/styles/button.styled'
import {SmallError} from '../components/styles/small_error_message.styled'
import {CardWrapper, CardBody, CardInput} from '../components/styles/card'
import DefaultLayout from './../components/layouts/default_layout'
import {SignUpFormValidator} from '../validators/signup_form_validator'
import isObjectUndefined from '../utils/errorChecker'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
const eyeOn = <FontAwesomeIcon icon={faEye} />
const eyeOff = <FontAwesomeIcon icon={faEyeSlash} />

function Signup() {
  const initialValues = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const [passwordShown, setPasswordShown] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown)
  }

  function handleEvent(event) {
    const {value, id} = event.target
    if (event.type === 'blur') {
      setFormValues({...formValues, [id]: value})
    } else if (event.type === 'change') {
      setFormValues({...formValues, [id]: value.trim()})
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsSubmit(isObjectUndefined(formErrors))
  }

  useEffect(() => {
    setFormErrors(SignUpFormValidator(formValues))
  }, [formValues])

  return (
    <DefaultLayout title="Sign Up">
      <Container>
        <CardWrapper>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <CardInput
                placeholder="Username"
                id="username"
                type="text"
                value={formValues.username}
                onChange={(e) => handleEvent(e)}
                required
              />
              <SmallError>{formErrors.username}</SmallError>
              <CardInput
                placeholder="First name"
                id="firstname"
                type="text"
                value={formValues.firstname}
                onChange={(e) => handleEvent(e)}
                required
              />
              <SmallError>{formErrors.firstname}</SmallError>
              <CardInput
                placeholder="Last name"
                id="lastname"
                type="text"
                value={formValues.lastname}
                onChange={(e) => handleEvent(e)}
                required
              />
              <SmallError>{formErrors.lastname}</SmallError>
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
              <Button bg="#0F9D58" color="#fff" disabled={isSubmit}>
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

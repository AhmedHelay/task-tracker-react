import {useState, useEffect} from 'react'

import {Container} from './../components/styles/container.styled'
import {Button} from './../components/styles/button.styled'
import {CardWrapper, CardBody, CardInput} from './../components/styles/card'
import {SmallError} from '../components/styles/small_error_message.styled'
import {LoginFormValidator} from '../validators/login_form_validator'
import isObjectUndefined from '../utils/errorChecker'

import DefaultLayout from './../components/layouts/default_layout'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
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
  const [hasErrors, setHasErrors] = useState({})

  const togglePasswordVisiblity = () => {
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
    setFormErrors(LoginFormValidator(formValues))
    setHasErrors(isObjectUndefined(formErrors))
  }, [formValues])

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
                disabled={hasErrors || isSubmit}
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

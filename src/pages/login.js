import {useState} from 'react'

import {Container} from './../components/styles/container.styled'
import {Button} from './../components/styles/button.styled'
import {CardWrapper, CardBody, CardInput} from './../components/styles/card'
import {SmallError} from '../components/styles/small_error_message.styled'
import {LoginFormValidator} from '../validators/login_form_validator'
import DefaultLayout from './../components/layouts/default_layout'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
const eyeOn = <FontAwesomeIcon icon={faEye} />
const eyeOff = <FontAwesomeIcon icon={faEyeSlash} />

function Login() {
  const [passwordShown, setPasswordShown] = useState(false)
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  })
  const [formErrors, setFormErrors] = useState({})

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

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(LoginFormValidator(formValues))
    // if (Object.keys(formErrors).length === 0) setIsSubmit(true)
  }

  return (
    <DefaultLayout title="Login">
      <Container>
        <CardWrapper>
          <CardBody>
            <form onSubmit={() => handleSubmit}>
              <CardInput
                placeholder="Username"
                id="username"
                type="text"
                onBlur={(e) => handleEvent(e)}
                onChange={(e) => handleEvent(e)}
                required
              />
              <SmallError>{formErrors.username}</SmallError>
              <CardInput
                placeholder="Password"
                id="password"
                type={passwordShown ? 'text' : 'password'}
                onBlur={(e) => handleEvent(e)}
                onChange={(e) => handleEvent(e)}
                rightSlot={passwordShown ? eyeOn : eyeOff}
                required
              />
              <SmallError>{formErrors.password}</SmallError>
              <i onClick={togglePasswordVisiblity}>
                {passwordShown ? eyeOn : eyeOff}
              </i>
              <Button bg="#0F9D58" color="#fff" type="submit">
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

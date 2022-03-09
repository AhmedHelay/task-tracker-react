import React from 'react'

import {Container} from './../components/styles/container.styled'
import {Button} from './../components/styles/button.styled'
import {CardWrapper, CardBody, CardInput} from './../components/styles/card'
import DefaultLayout from './../components/layouts/default_layout'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
const eyeOn = <FontAwesomeIcon icon={faEye} />
const eyeOff = <FontAwesomeIcon icon={faEyeSlash} />

function Login() {
  const [passwordShown, setPasswordShown] = React.useState(false)
  const [formState, setFormState] = React.useState({username: '', password: ''})

  React.useEffect(() => {
    console.log(formState)
  }, [formState])

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown)
  }

  function handleEvent(event) {
    const {value, id} = event.target
    if (event.type === 'blur') {
      //OnBlur
      setFormState({...formState, [id]: value})
    } else if (event.type === 'change') {
      setFormState({...formState, [id]: value.trim()})
    }
  }

  return (
    <DefaultLayout title="Login">
      <Container>
        <CardWrapper>
          <CardBody>
            <form>
              <CardInput
                placeholder="Username"
                id="username"
                type="text"
                onBlur={(e) => handleEvent(e)}
                onChange={(e) => handleEvent(e)}
                required
              />
              <CardInput
                placeholder="Password"
                id="password"
                type={passwordShown ? 'text' : 'password'}
                onBlur={(e) => handleEvent(e)}
                onChange={(e) => handleEvent(e)}
                rightSlot={passwordShown ? eyeOn : eyeOff}
                required
              />
              <i onClick={togglePasswordVisiblity}>{eyeOn}</i>
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

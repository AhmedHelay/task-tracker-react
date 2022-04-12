import React, {useState} from 'react'
import {BaseInput} from '../BaseInput'
import RedirectMessage from '../RedirectMessage'
import {FormTextInput} from '../TextInput/components'
import {FormPasswordInput, Icon} from './components'

import eyeOn from './icons/visibility.png'
import eyeOff from './icons/visibilityOff.png'

export default function PasswordInput({label, error, recovery, ...props}) {
  const [passwordShown, setPasswordShown] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown)
  }

  return (
    <>
      <BaseInput label={label} error={error}>
        <FormPasswordInput {...props}>
          <FormTextInput
            {...props}
            type={passwordShown ? 'text' : 'password'}
          ></FormTextInput>
          <Icon onClick={togglePasswordVisibility}>
            {passwordShown ? <img src={eyeOn} /> : <img src={eyeOff} />}
          </Icon>
        </FormPasswordInput>
      </BaseInput>
      {recovery && (
        <RedirectMessage textAction="Forgot password?" path="/login/recovery" />
      )}
    </>
  )
}

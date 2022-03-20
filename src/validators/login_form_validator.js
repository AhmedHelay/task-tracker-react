import {EmailValidator} from './form_validators/email_validator'
import {PasswordValidator} from './form_validators/password_validator'

export const LoginFormValidator = (values) => {
  const errors = {}
  errors.email = EmailValidator(values.email)
  errors.password = PasswordValidator(values.password)
  return errors
}

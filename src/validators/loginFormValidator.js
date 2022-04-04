import {emailValidator} from './formValidators/emailValidator'
import {passwordValidator} from './formValidators/passwordValidator'

export const loginFormValidator = (values) => {
  const errors = {}
  errors.email = emailValidator(values.email)
  errors.password = passwordValidator(values.password)
  return errors
}

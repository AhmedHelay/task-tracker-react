import emailValidator from './inputValidators/emailValidator'
import passwordValidator from './inputValidators/passwordValidator'

export default function loginFormValidator(values) {
  const errors = {}
  errors.email = emailValidator(values.email)
  errors.password = passwordValidator(values.password)
  return errors
}

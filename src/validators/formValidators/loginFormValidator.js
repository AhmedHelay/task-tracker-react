import emailValidator from './inputValidators/emailValidator'
import passwordValidator from './inputValidators/passwordValidator'

export default function loginFormValidator(formState, errorsState) {
  const errors = {}
  errors.email = emailValidator(formState.email)
  errors.password = passwordValidator(formState.password)
  return {...errorsState, ...errors}
}

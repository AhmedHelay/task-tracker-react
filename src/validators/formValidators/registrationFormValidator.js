import emailValidator from './inputValidators/emailValidator'
import textFieldValidator from './inputValidators/textFieldValidator'
import passwordValidator from './inputValidators/passwordValidator'

export default function registrationFormValidator(formState, errorsState) {
  const errors = {}
  errors.firstName = textFieldValidator(formState.firstName)
  errors.lastName = textFieldValidator(formState.lastName)
  errors.email = emailValidator(formState.email)
  errors.password = passwordValidator(formState.password)
  return {...errorsState, ...errors}
}

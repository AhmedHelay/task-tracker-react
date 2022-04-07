import emailValidator from './inputValidators/emailValidator'
import textFieldValidator from './inputValidators/textFieldValidator'
import passwordValidator from './inputValidators/passwordValidator'

export default function registrationFormValidator(values) {
  const errors = {}
  errors.firstName = textFieldValidator(values.firstName)
  errors.lastName = textFieldValidator(values.lastName)
  errors.email = emailValidator(values.email)
  errors.password = passwordValidator(values.password)
  return errors
}

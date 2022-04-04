import {emailValidator} from './formValidators/emailValidator'
import {textFieldValidator} from './formValidators/textFieldValidator'
import {passwordValidator} from './formValidators/passwordValidator'

export const registrationFormValidator = (values) => {
  const errors = {}
  errors.firstName = textFieldValidator(values.firstName)
  errors.lastName = textFieldValidator(values.lastName)
  errors.email = emailValidator(values.email)
  errors.password = passwordValidator(values.password)
  return errors
}

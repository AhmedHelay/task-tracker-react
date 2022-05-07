import emailValidator from './inputValidators/emailValidator'
import textFieldValidator from './inputValidators/textFieldValidator'

export default function udpateUserValidator(formState, errorState) {
  const errors = {}
  errors.email = emailValidator(formState.email)
  errors.firstName = textFieldValidator(formState.firstName)
  errors.lastName = textFieldValidator(formState.lastName)

  return {...errorState, ...errors}
}

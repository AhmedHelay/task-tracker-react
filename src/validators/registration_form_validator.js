import {EmailValidator} from './form_validators/email_validator'
import {TextFieldValidator} from './form_validators/text_field_validator'
import {PasswordValidator} from './form_validators/password_validator'

export const RegistrationFormValidator = (values) => {
  const errors = {}
  errors.firstName = TextFieldValidator(values.firstName)
  errors.lastName = TextFieldValidator(values.lastName)
  errors.email = EmailValidator(values.email)
  errors.password = PasswordValidator(values.password)
  return errors
}

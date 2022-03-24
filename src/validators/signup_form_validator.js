import {EmailValidator} from './form_validators/email_validator'
import {TextFieldValidator} from './form_validators/text_field_validator'
import {PasswordValidator} from './form_validators/password_validator'

export const SignUpFormValidator = (values) => {
  const errors = {}
  errors.firstname = TextFieldValidator(values.firstName)
  errors.lastname = TextFieldValidator(values.lastName)
  errors.email = EmailValidator(values.email)
  errors.password = PasswordValidator(values.password)
  return errors
}

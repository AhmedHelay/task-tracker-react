import {EmailValidator} from './form_validators/email_validator'
import {TextFieldValidator} from './form_validators/text_field_validator'
import {PasswordValidator} from './form_validators/password_validator'

export const SignUpFormValidator = (values) => {
  const errors = {}
  errors.username = TextFieldValidator(values.username)
  errors.firstname = TextFieldValidator(values.firstname)
  errors.lastname = TextFieldValidator(values.lastname)
  errors.email = EmailValidator(values.email)
  errors.password = PasswordValidator(values.password)
  return errors
}

import {gql} from '@apollo/client'
import {USER_PARTIAL_FRAGMENT} from '../../fragments/user'

export const UPDATE_USER = gql`
  mutation updateUser(
    $email: String
    $password: String
    $currentPassword: String
    $firstName: String
    $lastName: String
  ) {
    updateUser(
      input: {
        email: $email
        password: $password 
        currentPassword: $currentPassword 
        firstName: $firstName 
        lastName: $lastName
      }
    ) {
      me {
        ${USER_PARTIAL_FRAGMENT}
      }
    }
  }
`

import {gql} from '@apollo/client'
import {USER_PARTIAL_FRAGMENT} from '../../fragments/user'

export const CONFIRM_USER = gql`
  mutation confirmUser($value: String!) {
    confirmUser(value: $value) {
      ${USER_PARTIAL_FRAGMENT}
    }
  }
`

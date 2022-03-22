import {gql} from '@apollo/client'

const SIGN_UP_MUTATION = gql`
  mutation signUp(
    $email: String!
    $password: String!
    $firstName: String
    $lastName: String
  ) {
    signup(
      input: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      accessToken
      refreshToken
      me {
        avatarUrl
        email
        firstName
        id
        lastName
      }
    }
  }
`
export default SIGN_UP_MUTATION

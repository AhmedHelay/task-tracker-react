import {gql} from '@apollo/client'

export const SIGN_IN_MUTATION = gql`
  mutation signIn($login: String!, $password: String!) {
    signin(input: {email: $login, password: $password}) {
      accessToken
      me {
        avatarUrl
        email
        firstName
        id
        lastName
      }
      refreshToken
    }
  }
`

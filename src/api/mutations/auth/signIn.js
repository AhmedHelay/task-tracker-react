import {gql} from '@apollo/client'

export const SIGN_IN_MUTATION = gql`
  mutation signIn($email: String!, $password: String!) {
    signin(input: {email: $email, password: $password}) {
      accessToken
      refreshToken
    }
  }
`

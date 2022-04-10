import {gql} from '@apollo/client'

export const UPDATE_PASSWORD = gql`
  mutation updatePassword($password: String!, $resetToken: String!) {
    updatePassword(input: {password: $password, resetToken: $resetToken}) {
      accessToken
      refreshToken
    }
  }
`

import {gql} from '@apollo/client'

export const UPDATE_TOKEN = gql`
  mutation updateToken {
    updateToken {
      accessToken
      refreshToken
    }
  }
`

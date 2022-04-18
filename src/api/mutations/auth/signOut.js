import {gql} from '@apollo/client'

export const SIGN_OUT = gql`
  mutation signOut($everywhere: Boolean) {
    signout(input: {everywhere: $everywhere}) {
      message
    }
  }
`

import {gql} from '@apollo/client'

export const SIGN_OUT = gql`
  mutation signOut($everywhere: Boolean!) {
    signOut(input: {everywhere: $everywhere}) {
      message
    }
  }
`

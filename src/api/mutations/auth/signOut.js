import {gql} from '@apollo/client'

export const SIGN_OUT_MUTATION = gql`
  mutation signOut($everywhere: Boolean!) {
    signOut(input: {everywhere: $everywhere}) {
      message
    }
  }
`

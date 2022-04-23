import {gql} from '@apollo/client'

export const REQUEST_PASSWORD_RECOVERY = gql`
  mutation requestPasswordRecovery($email: String!) {
    requestPasswordRecovery(input: {email: $email}) {
      detail
      message
    }
  }
`

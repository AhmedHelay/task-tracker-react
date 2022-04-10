import {gql} from '@apollo/client'

export const DESTROY_TASK = gql`
  mutation destroyTask($id: ID!) {
    destroyTask(taskId: $id)
  }
`

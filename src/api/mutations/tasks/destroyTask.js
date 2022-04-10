import {gql} from '@apollo/client'

export const DESTROY_TASK_MUTATION = gql`
  mutation destroyTask($id: ID!) {
    destroyTask(taskId: $id)
  }
`

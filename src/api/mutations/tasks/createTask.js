import {gql} from '@apollo/client'
import taskFragment from '../../fragments/task'

export const CREATE_TASK_MUTATION = gql`
  mutation createTask(
    $id: ID!
    $title: String!
    $description: String
    $status: status
  ) {
    createTask(
      projectId: $id
      title: $title
      description: $description
      status: $status
    ) {
      ...TaskFragment
    }
  }
  ${taskFragment}
`
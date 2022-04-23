import {gql} from '@apollo/client'
import taskFragment from '../../fragments/task'

export const CREATE_TASK = gql`
  mutation createTask(
    $id: ID!
    $title: String!
    $description: String
    $status: TaskStatus!
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

import {gql} from '@apollo/client'

export const DESTROY_PROJECT_MUTATION = gql`
  mutation destroyProject($id: ID!) {
    destroyProject(projectId: $id)
  }
`

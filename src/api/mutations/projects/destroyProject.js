import {gql} from '@apollo/client'

export const DESTROY_PROJECT = gql`
  mutation destroyProject($id: ID!) {
    destroyProject(projectId: $id)
  }
`

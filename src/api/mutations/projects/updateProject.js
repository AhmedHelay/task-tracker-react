import {gql} from '@apollo/client'
import projectFragment from '../../fragments/project'

export const UPDATE_PROJECT = gql`
  mutation updateProject($id: ID!, $name: String!, $description: String) {
    updateProject(projectId: $id, name: $name, description: $description) {
      ...ProjectFragment
    }
  }
  ${projectFragment}
`

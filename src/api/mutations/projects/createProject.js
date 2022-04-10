import {gql} from '@apollo/client'
import projectFragment from '../../fragments/project'

export const CREATE_PROJECT = gql`
  mutation createProject($name: String!, $description: String) {
    createProject(name: $name, description: $description) {
      ...ProjectFragment
    }
  }
  ${projectFragment}
`

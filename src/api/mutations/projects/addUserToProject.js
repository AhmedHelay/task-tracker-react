import {gql} from '@apollo/client'
import projectFragment from '../../fragments/project'

export const ADD_USER_TO_PROJECT_MUTATION = gql`
  mutation addUserToProject($projectId: ID!, $userId: ID!) {
    addUserToProject(projectId: $projectId, userId: $userId) {
      ...ProjectFragment
    }
  }
  ${projectFragment}
`

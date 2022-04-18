import {gql} from '@apollo/client'
import {USER_PARTIAL_FRAGMENT} from '../fragments/user'
import projectFragment from '../fragments/project'
import taskFragment from '../fragments/task'
import commentFragment from '../fragments/comment'

export const CURRENT_USER = gql`
  query currentUser {
    me {
      # user personal details
      ${USER_PARTIAL_FRAGMENT}

      # user projects
      projects {
        ...ProjectFragment

        # project tasks
        tasks {
          ...TaskFragment

          # task comments
          comments {
            ...CommentFragment

            # comment creator
            creator {
              ${USER_PARTIAL_FRAGMENT}
            }
          }

          # task creator
          creator {
            ${USER_PARTIAL_FRAGMENT}
          }
        }

        # project creator
        creator {
          ${USER_PARTIAL_FRAGMENT}
        }

        # project users
        users {
          ${USER_PARTIAL_FRAGMENT}
        }
      }
    }
  }
  ${projectFragment}
  ${taskFragment}
  ${commentFragment}
`

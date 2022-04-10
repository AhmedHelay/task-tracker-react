import {gql} from '@apollo/client'
import commentFragment from '../../fragments/comment'

export const CREATE_COMMENT = gql`
  mutation createComment($id: ID!, $text: text) {
    createComment(taskId: $id, text: $text) {
      ...CommentFragment
    }
  }
  ${commentFragment}
`

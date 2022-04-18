import {gql} from '@apollo/client'

export default gql`
  fragment CommentFragment on Comment {
    id
    text
    createdAt
    updatedAt
  }
`

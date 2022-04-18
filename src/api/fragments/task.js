import {gql} from '@apollo/client'

export default gql`
  fragment TaskFragment on Task {
    id
    title
    status
    description
    createdAt
    updatedAt
  }
`

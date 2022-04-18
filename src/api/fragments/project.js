import {gql} from '@apollo/client'

export default gql`
  fragment ProjectFragment on Project {
    id
    name
    description
    createdAt
    updatedAt
  }
`

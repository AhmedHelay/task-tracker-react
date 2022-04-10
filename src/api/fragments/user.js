import {gql} from '@apollo/client'

export default gql`
  fragment UserFragment on User {
    id
    email
    firstName
    lastName
    avatarUrl
  }
`

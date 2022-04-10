import {gql} from '@apollo/client'

export default gql`
  fragment CurrentUserFragment on CurrentUser {
    id
    email
    firstName
    lastName
    avatarUrl
  }
`

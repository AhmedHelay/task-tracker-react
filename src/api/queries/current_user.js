import {gql} from '@apollo/client'

const USER_ME_QUERY = gql`
  query currentUser {
    me {
      avatarUrl
      email
      firstName
      id
      lastName
    }
  }
`

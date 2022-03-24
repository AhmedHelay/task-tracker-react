import {gql} from '@apollo/client'

export const USER_ME_QUERY = gql`
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

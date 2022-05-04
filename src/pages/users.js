import React from 'react'

import AuthorizeComponent from 'components/AuthorizeComponent'
import {useQuery} from '@apollo/client'
import {USERS} from 'api/query/users'

import DefaultLayout from 'components/layouts/DefaultLayout'
import UsersCardsWrapper from 'components/entity/users/UserCardsWrapper'
import UserCard from 'components/entity/users/UserCard'

function Users() {
  const {data, loading} = useQuery(USERS)

  return (
    <DefaultLayout loading={loading}>
      <UsersCardsWrapper>
        {data?.users?.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            email={user.email}
            firstName={user.firstName}
            lastName={user.lastName}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </UsersCardsWrapper>
    </DefaultLayout>
  )
}

export default (
  <AuthorizeComponent
    Component={Users}
    onUserLogedIn={false}
    redirectTo="/login"
  />
)

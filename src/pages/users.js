import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import useAuthUser from 'global/AuthUser'
import {useQuery} from '@apollo/client'
import {USERS} from 'api/query/users'

import DefaultLayout from 'components/layouts/DefaultLayout'
import UsersCardsWrapper from 'components/entity/users/UserCardsWrapper'
import UserCard from 'components/entity/users/UserCard'

export default function Users() {
  const {user, isLoading} = useAuthUser()
  const {data, loading} = useQuery(USERS)

  const navigate = useNavigate()
  useEffect(() => {
    if (isLoading === false && !user) {
      navigate('/login')
    }
  }, [user, isLoading, navigate])

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

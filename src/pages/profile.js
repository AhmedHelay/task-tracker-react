import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import useAuthUser from 'global/AuthUser'

import DefaultLayout from 'components/layouts/DefaultLayout'
import CurrentUserCard from 'components/entity/users/CurrentUserCard'
import UserHeader from 'components/entity/users/CurrentUserCard/UserHeader'
import UpdateUserForm from 'components/entity/users/CurrentUserCard/UpdateUserForm'

export default function Profile() {
  const {user, isLoading} = useAuthUser()

  const navigate = useNavigate()
  useEffect(() => {
    if (isLoading === false && !user) {
      navigate('/login')
    }
  }, [user, isLoading, navigate])

  return (
    <DefaultLayout loading={isLoading}>
      {user && (
        <CurrentUserCard>
          <UserHeader user={user} />
          <UpdateUserForm user={user} />
        </CurrentUserCard>
      )}
    </DefaultLayout>
  )
}

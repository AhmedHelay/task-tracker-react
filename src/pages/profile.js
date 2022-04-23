import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import useAuthUser from 'global/AuthUser'

import DefaultLayout from 'components/layouts/DefaultLayout'
import CurrentUserCard from 'components/entity/users/CurrentUserCard'

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
      <CurrentUserCard me={user} />
    </DefaultLayout>
  )
}

import React from 'react'

import useAuthUser from 'global/AuthUser'
import AuthorizeComponent from 'components/AuthorizeComponent'

import CurrentUserCard from 'components/entity/users/CurrentUserCard'
import UserHeader from 'components/entity/users/CurrentUserCard/UserHeader'
import UpdateUserForm from 'components/entity/users/CurrentUserCard/UpdateUserForm'

function Profile() {
  const {user} = useAuthUser()

  return (
    <CurrentUserCard>
      <UserHeader user={user} />
      <UpdateUserForm user={user} />
    </CurrentUserCard>
  )
}

export default AuthorizeComponent(Profile, false, '/login')

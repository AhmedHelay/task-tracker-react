import React from 'react'

import useAuthUser from 'global/AuthUser'
import AuthorizeComponent from 'components/AuthorizeComponent'

import DefaultLayout from 'components/layouts/DefaultLayout'
import CurrentUserCard from 'components/entity/users/CurrentUserCard'
import UserHeader from 'components/entity/users/CurrentUserCard/UserHeader'
import UpdateUserForm from 'components/entity/users/CurrentUserCard/UpdateUserForm'

function Profile() {
  const {user, isLoading} = useAuthUser()

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

export default (
  <AuthorizeComponent
    Component={Profile}
    onUserLogedIn={false}
    redirectTo="/login"
  />
)

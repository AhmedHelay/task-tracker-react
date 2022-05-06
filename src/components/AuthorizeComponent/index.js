import React, {useEffect} from 'react'

import {useNavigate} from 'react-router-dom'
import useAuthUser from 'global/AuthUser'

import DefaultLayout from 'components/layouts/DefaultLayout'

export default function AuthorizeComponent(
  Component,
  onUserLogedIn,
  redirectTo
) {
  return function Authorize() {
    const {user, isLoading} = useAuthUser()
    const navigate = useNavigate()

    useEffect(() => {
      if (isLoading === false && (onUserLogedIn ? user : !user)) {
        navigate(redirectTo, {replace: true})
      }
    }, [user, isLoading, navigate])

    return (
      <DefaultLayout loading={isLoading}>
        <Component />
      </DefaultLayout>
    )
  }
}

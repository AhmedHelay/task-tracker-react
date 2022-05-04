import React, {useEffect} from 'react'

import {useNavigate} from 'react-router-dom'
import useAuthUser from 'global/AuthUser'

export default function AuthorizeComponent({
  Component,
  onUserLogedIn,
  redirectTo
}) {
  const {user, isLoading} = useAuthUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoading === false && onUserLogedIn ? user : !user) {
      navigate(redirectTo, {replace: true})
    }
  }, [user, isLoading, onUserLogedIn, redirectTo, navigate])

  return <Component />
}

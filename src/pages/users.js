import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import useAuthUser from 'global/AuthUser'

import DefaultLayout from 'components/layouts/DefaultLayout'

export default function Users() {
  const {user, isLoading} = useAuthUser()

  const navigate = useNavigate()
  useEffect(() => {
    if (isLoading === false && !user) {
      navigate('/login')
    }
  }, [user, isLoading, navigate])
  return <DefaultLayout></DefaultLayout>
}

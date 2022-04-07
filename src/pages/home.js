import React, {useEffect} from 'react'

import useAuthUser from 'global/AuthUser'
import {useNavigate} from 'react-router-dom'

import DefaultLayout from 'components/layouts/DefaultLayout'
import {DangerButton} from 'components/button/index'

function Home() {
  const navigate = useNavigate()
  const {
    state: {user, isLoading},
    dispatch
  } = useAuthUser()

  function handleLogout() {
    dispatch({type: 'logout'})
    navigate('/login', {replace: true})
  }

  useEffect(() => {
    if (isLoading === false && !user) {
      navigate('/login')
    }
  }, [user, isLoading, navigate])

  return (
    <DefaultLayout title="Home">
      <DangerButton
        type="button"
        disabled={false}
        onClick={() => handleLogout()}
      >
        Logout
      </DangerButton>
    </DefaultLayout>
  )
}

export default Home

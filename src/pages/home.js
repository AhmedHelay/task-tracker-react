import React, {useEffect} from 'react'

import useAuthUser from 'global/AuthUser'
import {useNavigate} from 'react-router-dom'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Button from 'components/form/Button'

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
      <Button
        bg="#DB4437"
        hbg="red"
        color="#fff"
        onClick={() => handleLogout()}
      >
        Logout
      </Button>
    </DefaultLayout>
  )
}

export default Home

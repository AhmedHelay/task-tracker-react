import React, {useEffect} from 'react'

import useAuthUser from 'global/AuthUser'
import useSignOut from 'hooks/mutations/auth/useSignOut'
import {useNavigate} from 'react-router-dom'

import DefaultLayout from 'components/layouts/DefaultLayout'
import {DangerButton} from 'components/button/index'

function Home() {
  const {user, isLoading} = useAuthUser()
  const {signOut} = useSignOut()

  async function handleLogout() {
    await signOut(false)
  }

  const navigate = useNavigate()
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

import React, {useEffect} from 'react'
import DefaultLayout from './../components/layouts/default_layout'
import {useNavigate} from 'react-router-dom'
import {Button} from 'components/styles/button.styled'
import {Container} from 'components/styles/container.styled'
import {CardWrapper} from 'components/styles/card'
import useAuthUser from 'global/AuthUser'

function Home() {
  const navigate = useNavigate()
  const {
    state: {user, isLoading}
  } = useAuthUser()

  function handleLogout() {
    localStorage.clear()
    navigate('/login')
  }
  useEffect(() => {
    if (isLoading === false && !user) {
      navigate('/login')
    }
  }, [user, isLoading, navigate])

  return (
    <DefaultLayout title="Home">
      <Container>
        <CardWrapper>
          <Button bg="#DB4437" color="#fff" onClick={() => handleLogout()}>
            Logout
          </Button>
        </CardWrapper>
      </Container>
    </DefaultLayout>
  )
}

export default Home

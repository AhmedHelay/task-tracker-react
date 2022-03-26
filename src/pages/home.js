import React, {useEffect} from 'react'
import DefaultLayout from './../components/layouts/default_layout'
import {useNavigate} from 'react-router-dom'
import {Button} from 'components/styles/button.styled'
import {Container} from 'components/styles/container.styled'
import {CardWrapper} from 'components/styles/card'
import useAuthUser from 'global/AuthUser'

function Home() {
  const navigate = useNavigate()
  const {state: AuthUser} = useAuthUser()
  useEffect(() => {
    if (!!AuthUser.me === false) {
      navigate('/login', {replace: true})
    }
  }, [AuthUser, navigate])

  return (
    <DefaultLayout title="Home">
      <Container>
        <CardWrapper>
          <Button bg="#0F9D58" color="#fff" onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button
            bg="#0F9D58"
            color="#fff"
            onClick={() => navigate('/Registration')}
          >
            Registration
          </Button>
        </CardWrapper>
      </Container>
    </DefaultLayout>
  )
}

export default Home

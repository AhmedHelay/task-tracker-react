import React from 'react'
import DefaultLayout from './../components/layouts/default_layout'
import {useNavigate} from 'react-router-dom'
import {Button} from './../components/styles/button.styled'
import {Container} from './../components/styles/container.styled'
import {CardWrapper} from './../components/styles/card'

function Home() {
  const navigate = useNavigate()

  return (
    <DefaultLayout title="Home">
      <Container>
        <CardWrapper>
          <Button bg="#0F9D58" color="#fff" onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button bg="#0F9D58" color="#fff" onClick={() => navigate('/signup')}>
            Signup
          </Button>
        </CardWrapper>
      </Container>
    </DefaultLayout>
  )
}

export default Home

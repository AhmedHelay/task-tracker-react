import useAuthUser from 'global/AuthUser'
import React from 'react'

import NavBar from '../NavBar'
import {Content} from './components'

export default function DefaultLayout({children}) {
  const {user} = useAuthUser()
  return (
    <Content>
      {user && <NavBar />}
      <main>{children}</main>
    </Content>
  )
}

import React from 'react'

import {Content} from './components'

export default function FormLayout({children}) {
  return (
    <Content>
      <main>{children}</main>
    </Content>
  )
}

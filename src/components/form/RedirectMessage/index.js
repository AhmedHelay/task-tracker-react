import React from 'react'
import {Link} from 'react-router-dom'
import {Message, MessageContainer, RedirectLink} from './components'

export default function RedirectMessage({text, textAction, path}) {
  return (
    <MessageContainer>
      {text && <Message>{text}</Message>}
      <Link to={path}>
        <RedirectLink>{textAction}</RedirectLink>
      </Link>
    </MessageContainer>
  )
}

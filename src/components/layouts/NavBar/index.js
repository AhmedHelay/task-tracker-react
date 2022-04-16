import React from 'react'

import {useNavigate} from 'react-router-dom'
import useSignOut from 'hooks/mutations/auth/useSignOut'

import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import GroupIcon from '@mui/icons-material/Group'
import LogoutIcon from '@mui/icons-material/Logout'

import {NavItem, NavList, useStyles} from './components'

export default function NavBar() {
  const classes = useStyles()

  const NavbarData = [
    {
      path: '/',
      icon: <HomeIcon className={classes.icon} fontSize="large" />
    },
    {
      path: '/profile',
      icon: <AccountCircleIcon className={classes.icon} fontSize="large" />
    },
    {
      path: '/users',
      icon: <GroupIcon className={classes.icon} fontSize="large" />
    }
  ]

  const {signOut} = useSignOut()

  function handleSignOut() {
    signOut(false)
  }

  const navigate = useNavigate()
  function handleNavigate(path) {
    navigate(path)
  }

  return (
    <NavList>
      {NavbarData.map((item, index) => {
        return (
          <NavItem key={index} onClick={() => handleNavigate(item.path)}>
            {item.icon}
          </NavItem>
        )
      })}
      <NavItem onClick={() => handleSignOut()}>
        {<LogoutIcon className={classes.icon} fontSize="large" />}
      </NavItem>
    </NavList>
  )
}

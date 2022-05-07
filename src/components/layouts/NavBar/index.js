import React from 'react'

import {useNavigate} from 'react-router-dom'
import useSignOut from 'hooks/mutations/auth/useSignOut'

import Box from '@mui/material/Box'
import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import GroupIcon from '@mui/icons-material/Group'
import LogoutIcon from '@mui/icons-material/Logout'
import IconButton from '@mui/material/IconButton'

import {useStyles} from './components'

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
    <Box className={classes.root}>
      {NavbarData.map((item, index) => {
        return (
          <IconButton
            className={classes.iconButton}
            key={index}
            onClick={() => handleNavigate(item.path)}
          >
            {item.icon}
          </IconButton>
        )
      })}
      <IconButton
        className={classes.iconButton}
        onClick={() => handleSignOut()}
      >
        {<LogoutIcon className={classes.icon} />}
      </IconButton>
    </Box>
  )
}

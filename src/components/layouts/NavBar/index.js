import React from 'react'

import {useNavigate} from 'react-router-dom'
import useSignOut from 'hooks/mutations/auth/useSignOut'

import {AiFillHome} from 'react-icons/ai'
import {FaUsers} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineLogout} from 'react-icons/md'

import {IconContext} from 'react-icons'
import {NavItem, NavList} from './components'

export default function NavBar() {
  const NavbarData = [
    {
      path: '/',
      icon: <AiFillHome />
    },
    {
      path: '/users',
      icon: <FaUsers />
    },
    {
      path: '/profile',
      icon: <CgProfile />
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
    <IconContext.Provider value={{color: '#fff'}}>
      <NavList>
        {NavbarData.map((item, index) => {
          return (
            <NavItem key={index} onClick={() => handleNavigate(item.path)}>
              {item.icon}
            </NavItem>
          )
        })}
        <NavItem onClick={() => handleSignOut()}>{<MdOutlineLogout />}</NavItem>
      </NavList>
    </IconContext.Provider>
  )
}

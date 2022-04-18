import React from 'react'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import {Icons, Name, OnLineTitle} from './components'
import {IconButton} from '@mui/material'

export default function Title({name, onShowClick, onProjectDestroyClick}) {
  function handleDestroy() {
    const result = confirm('Are you sure you want to delete this project ?')
    if (result) onProjectDestroyClick()
  }
  return (
    <OnLineTitle>
      <Name>{name}</Name>
      <Icons>
        <IconButton
          sx={{color: '#619cff'}}
          color="info"
          onClick={() => onShowClick()}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          sx={{color: '#4d1100'}}
          color="warning"
          onClick={() => handleDestroy()}
        >
          <DeleteIcon />
        </IconButton>
      </Icons>
    </OnLineTitle>
  )
}

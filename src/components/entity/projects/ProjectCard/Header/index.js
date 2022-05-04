import React from 'react'

import useDestoryProject from 'hooks/mutations/projects/useDestroyProject'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import {Icons, Name, OnLineTitle} from './components'
import IconButton from '@mui/material/IconButton'

export default function Header({id, name, onProjectShowClick}) {
  const {destroyProject} = useDestoryProject()

  function handleDestroy() {
    const result = confirm('Are you sure you want to delete this project ?')
    if (result) destroyProject(id)
  }
  return (
    <OnLineTitle>
      <Name>{name}</Name>
      <Icons>
        <IconButton
          sx={{color: '#619cff'}}
          color="info"
          onClick={() => onProjectShowClick()}
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

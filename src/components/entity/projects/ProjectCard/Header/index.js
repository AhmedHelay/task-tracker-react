import React from 'react'

import useDestoryProject from 'hooks/mutations/projects/useDestroyProject'

import Box from '@material-ui/core/Box'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import Typography from '@material-ui/core/Typography'
import {useStyle} from './components'

export default function Header({id, name, onProjectShowClick}) {
  const {destroyProject} = useDestoryProject()
  const classes = useStyle()

  function handleDestroy() {
    const result = confirm('Are you sure you want to delete this project ?')
    if (result) destroyProject(id)
  }
  return (
    <Box component="div" className={classes.root}>
      <Typography className={classes.name}>{name}</Typography>
      <IconButton
        className={classes.icon}
        color="info"
        onClick={() => onProjectShowClick()}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        className={classes.icon}
        sx={{color: '#912000'}}
        color="warning"
        onClick={() => handleDestroy()}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  )
}

import React, {useEffect} from 'react'

import {ModalCardWrapper} from 'components/entity/components'
import ProjectUpdateForm from './ProjetUpdateForm'
import ProjectAddUser from './ProjectAddUser'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'
import {useStyle} from './components'

export default function ProjectModelCard({project, onCloseCardClick}) {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onCloseCardClick(false)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [onCloseCardClick])

  const classes = useStyle()
  return (
    <ModalCardWrapper>
      <Box className={classes.root}>
        <Box className={classes.content}>
          <ProjectUpdateForm project={project} />
          <ProjectAddUser project={project} />
        </Box>
        <IconButton
          sx={{color: '#912000'}}
          color="warning"
          onClick={() => onCloseCardClick(false)}
        >
          <ClearIcon fontSize="large" />
        </IconButton>
      </Box>
    </ModalCardWrapper>
  )
}

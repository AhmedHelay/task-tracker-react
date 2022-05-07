import React from 'react'

import ModalCard from 'components/entity/modals/ModalCard'
import Box from '@mui/material/Box'
import ProjectUpdateForm from './ProjetUpdateForm'
import ProjectAddUser from './ProjectAddUser'
import {useStyle} from './components'

export default function ProjectModelCard({project, onCloseModalClick}) {
  const classes = useStyle()
  return (
    <ModalCard onCloseModalClick={onCloseModalClick}>
      <Box className={classes.root}>
        <ProjectUpdateForm project={project} />
        <ProjectAddUser project={project} />
      </Box>
    </ModalCard>
  )
}

import React from 'react'

import ModalCard from 'components/entity/modals/ModalCard'
import ProjectUpdateForm from './ProjetUpdateForm'
import ProjectAddUser from './ProjectAddUser'

export default function ProjectModelCard({project, onCloseModalClick}) {
  return (
    <ModalCard onCloseModalClick={onCloseModalClick}>
      <ProjectUpdateForm project={project} />
      <ProjectAddUser project={project} />
    </ModalCard>
  )
}

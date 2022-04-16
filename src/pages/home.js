import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import useAuthUser from 'global/AuthUser'

import useCreateProject from 'hooks/mutations/projects/useCreateProject'
import useUpdateProject from 'hooks/mutations/projects/useUpdateProject'
import useDestoryProject from 'hooks/mutations/projects/useDestroyProject'

import DefaultLayout from 'components/layouts/DefaultLayout'
import ProjectExpandCard from 'components/entity/projects/ProjectExpandCard'
import ProjectCreateForm from 'components/entity/projects/ProjectCreateForm'
import ProjectCard from 'components/entity/projects/ProjectCard'

import ProjectsCardsWrapper from 'components/entity/projects/ProjectsWrapper'
import TextInput from 'components/form/TextInput'
import {SubmitButton} from 'components/button'
import handleFormChange from 'utils/forms/handleChange'

export default function Home() {
  const {user, isLoading} = useAuthUser()
  const [formState, setFormState] = useState({})
  const [currentOpenProject, setCurrentOpenProject] = useState(undefined)

  const {createProject} = useCreateProject()
  const {updateProject} = useUpdateProject()
  const {destroyProject} = useDestoryProject()

  function handleEvent(event) {
    handleFormChange(event, formState, setFormState)
  }

  function showProject(project) {
    setCurrentOpenProject(project)
  }

  async function onClickCreateProject() {
    if (formState.name && formState.name.length > 1)
      await createProject(formState.name, undefined)
  }

  const navigate = useNavigate()
  useEffect(() => {
    if (isLoading === false && !user) {
      navigate('/login')
    }
  }, [user, isLoading, navigate])

  return (
    <DefaultLayout>
      <ProjectsCardsWrapper>
        {user?.projects?.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            tasks={project.tasks}
            onShowClick={() => showProject(project)}
            onDestroyClick={() => destroyProject(project.id)}
          />
        ))}
        <ProjectCreateForm>
          <TextInput
            id="name"
            onBlur={(e) => handleEvent(e)}
            onChange={(e) => handleEvent(e)}
          />
          <SubmitButton type="submit" onClick={onClickCreateProject}>
            Create Project
          </SubmitButton>
        </ProjectCreateForm>
      </ProjectsCardsWrapper>
      {currentOpenProject && (
        <ProjectExpandCard
          project={currentOpenProject}
          update={updateProject}
        ></ProjectExpandCard>
      )}
    </DefaultLayout>
  )
}

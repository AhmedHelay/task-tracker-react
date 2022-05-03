import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import useAuthUser from 'global/AuthUser'

import DefaultLayout from 'components/layouts/DefaultLayout'
import ProjectsCardsWrapper from 'components/entity/projects/ProjectsWrapper'
import ProjectCreateForm from 'components/entity/projects/ProjectCreateForm'
import ProjectCard from 'components/entity/projects/ProjectCard'
import ProjectExpandCard from 'components/entity/projects/ProjectExpandCard'
import TaskExpandCard from 'components/entity/tasks/TaskExpandCard'

export default function Home() {
  const {user, isLoading} = useAuthUser()
  const [currentOpenProject, setCurrentOpenProject] = useState(undefined)
  const [currentOpenTask, setCurrentOpenTask] = useState(undefined)

  function showProject(project) {
    setCurrentOpenProject(project)
  }

  function showTask(task) {
    setCurrentOpenTask(task)
  }

  const navigate = useNavigate()
  useEffect(() => {
    if (isLoading === false && !user) {
      navigate('/login')
    }
  }, [user, isLoading, navigate])

  return (
    <DefaultLayout loading={isLoading}>
      <ProjectsCardsWrapper>
        {user?.projects?.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            tasks={project.tasks}
            onTaskShowClick={showTask}
            onProjectShowClick={() => showProject(project)}
          />
        ))}
        <ProjectCreateForm />
      </ProjectsCardsWrapper>
      {currentOpenProject && (
        <ProjectExpandCard
          project={currentOpenProject}
          onCloseCardClick={setCurrentOpenProject}
        ></ProjectExpandCard>
      )}
      {currentOpenTask && (
        <TaskExpandCard
          task={currentOpenTask}
          onCloseCardClick={setCurrentOpenTask}
        ></TaskExpandCard>
      )}
    </DefaultLayout>
  )
}

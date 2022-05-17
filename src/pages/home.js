import React, {useState} from 'react'

import AuthorizeComponent from 'components/AuthorizeComponent'
import useAuthUser from 'global/AuthUser'

import ProjectsCardsWrapper from 'components/entity/projects/ProjectsWrapper'
import ProjectCreateForm from 'components/entity/projects/ProjectCreateForm'
import ProjectCard from 'components/entity/projects/ProjectCard'
import ProjectModalCard from 'components/entity/projects/ProjectModalCard'
import TaskModalCard from 'components/entity/tasks/TaskModalCard'

function Home() {
  const INITIAL_STATE = {projectId: '', id: ''}
  const {user} = useAuthUser()
  const [projectModalId, setProjectModalId] = useState()
  const [taskModalId, setTaskModalID] = useState(INITIAL_STATE)

  function showTaskModal(projectId, id) {
    setTaskModalID({projectId: projectId, id: id})
  }

  const project = () => {
    return user?.projects?.find((project) => project.id === projectModalId)
  }

  const task = () => {
    return user?.projects
      ?.find((project) => project.id === taskModalId.projectId)
      ?.tasks.find((task) => task.id === taskModalId.id)
  }

  return (
    <>
      <ProjectsCardsWrapper>
        {user?.projects?.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            tasks={project.tasks}
            onTaskShowClick={showTaskModal}
            onProjectShowClick={() => setProjectModalId(project.id)}
          />
        ))}
        <ProjectCreateForm />
      </ProjectsCardsWrapper>
      {projectModalId && (
        <ProjectModalCard
          project={project()}
          onCloseModalClick={() => setProjectModalId(undefined)}
        ></ProjectModalCard>
      )}
      {taskModalId.projectId && taskModalId.id && (
        <TaskModalCard
          userId={user.id}
          task={task()}
          onCloseModalClick={() => setTaskModalID(INITIAL_STATE)}
        ></TaskModalCard>
      )}
    </>
  )
}

export default AuthorizeComponent(Home, false, '/login')

import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import useAuthUser from 'global/AuthUser'

import useCreateProject from 'hooks/mutations/projects/useCreateProject'
import useUpdateProject from 'hooks/mutations/projects/useUpdateProject'
import useDestoryProject from 'hooks/mutations/projects/useDestroyProject'
import useAddUserToProject from 'hooks/mutations/projects/useAddUserToProject'
import useCreateTask from 'hooks/mutations/tasks/useCreateTask'
import useUpdateTask from 'hooks/mutations/tasks/useUpdateTask'
import useDestoryTask from 'hooks/mutations/tasks/useDestroyTask'

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

  const {createProject} = useCreateProject()
  const {updateProject} = useUpdateProject()
  const {destroyProject} = useDestoryProject()
  const {addUserToProject} = useAddUserToProject()

  const {createTask} = useCreateTask()
  const {updateTask} = useUpdateTask()
  const {destroyTask} = useDestoryTask()

  function showProject(project) {
    setCurrentOpenProject(project)
  }

  function showTask(task) {
    console.log(task)
    setCurrentOpenTask(undefined)
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
            onTaskCreateClick={createTask}
            onTaskDestroyClick={destroyTask}
            onProjectShowClick={() => showProject(project)}
            onProjectDestroyClick={() => destroyProject(project.id)}
          />
        ))}
        <ProjectCreateForm onCreateClick={createProject} />
      </ProjectsCardsWrapper>
      {currentOpenProject && (
        <ProjectExpandCard
          onCloseCardClick={setCurrentOpenProject}
          project={currentOpenProject}
          onAddUserClick={addUserToProject}
          onUpdateClick={updateProject}
        ></ProjectExpandCard>
      )}
      {currentOpenTask && (
        <TaskExpandCard
          task={currentOpenTask}
          onUpdateClick={updateTask}
        ></TaskExpandCard>
      )}
    </DefaultLayout>
  )
}

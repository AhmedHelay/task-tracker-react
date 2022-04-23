import React from 'react'

import {Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import Title from './Title'

import TaskCard from 'components/entity/tasks/TaskCard'
import TasksCardsWrapper from 'components/entity/tasks/TasksCardsWrapper'
import TaskCreateForm from 'components/entity/tasks/TaskCreateForm'

const useStyle = makeStyles(() => ({
  root: {
    minWidth: '250px',
    maxWidth: '250px',
    padding: '10px',
    marginRight: '25px',
    borderRadius: '10px',
    backgroundColor: '#1a1c1e',
    maxHeight: '95%',
    overFlowY: 'auto',
    display: 'flex',
    flexDirection: 'column'
  }
}))

export default function ProjectCard({
  id,
  name,
  tasks,
  onTaskShowClick,
  onTaskCreateClick,
  onTaskDestroyClick,
  onProjectShowClick,
  onProjectDestroyClick
}) {
  const classes = useStyle()

  return (
    <Paper className={classes.root}>
      <Title
        id={id}
        name={name}
        onShowClick={onProjectShowClick}
        onProjectDestroyClick={onProjectDestroyClick}
      ></Title>
      <TasksCardsWrapper>
        {tasks?.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            status={task.status}
            createdAt={task.createdAt}
            onTaskShowClick={() => {
              onTaskShowClick(task)
            }}
            onTaskDestroyClick={() => onTaskDestroyClick(task.id)}
          />
        ))}
      </TasksCardsWrapper>
      <TaskCreateForm id={id} onCreateClick={onTaskCreateClick} />
    </Paper>
  )
}

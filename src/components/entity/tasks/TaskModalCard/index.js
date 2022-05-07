import React from 'react'

import ModalCard from 'components/entity/modals/ModalCard'
import Box from '@mui/material/Box'
import TaskUpdateForm from './TaskUpdateForm'
import TaskComments from './TaskComments'
import CommentCreateForm from '../../comments/CommentCreateForm'
import {useStyle} from './components'

export default function TaskModalCard({userId, task, onCloseModalClick}) {
  const classes = useStyle()

  return (
    <ModalCard onCloseModalClick={onCloseModalClick}>
      <Box className={classes.root}>
        <Box>
          <TaskUpdateForm task={task} />
          <CommentCreateForm userId={userId} taskId={task.id} />
        </Box>
        <TaskComments comments={task.comments} />
      </Box>
    </ModalCard>
  )
}

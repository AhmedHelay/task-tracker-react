import React, {useState} from 'react'

import useCreateTask from 'hooks/mutations/tasks/useCreateTask'

import Grid from '@mui/material/Grid'
import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
import {useStyle} from './components'
import CustomTextField from 'components/entity/mui/CustomTextField'

export default function TaskCreateForm({projectId}) {
  const [input, setInput] = useState('')
  const [disabled, setdisabled] = useState(false)

  const {createTask} = useCreateTask()
  const classes = useStyle()

  async function handleClick() {
    if (input && input.length > 0) {
      setdisabled(true)
      await createTask(projectId, input, undefined, 'NOT_STARTED')
      setInput('')
    }
    setdisabled(false)
  }

  return (
    <Grid
      className={classes.root}
      container
      alignItems="center"
      justifyContent="center"
    >
      <CustomTextField
        placeholder="Add Task"
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}
      />
      <IconButton
        className={classes.icon}
        disabled={disabled}
        onClick={handleClick}
      >
        <AddIcon />
      </IconButton>
    </Grid>
  )
}

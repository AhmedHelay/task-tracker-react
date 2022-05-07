import React, {useState} from 'react'

import useCreateTask from 'hooks/mutations/tasks/useCreateTask'

import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
import {useStyle} from './components'

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
      <TextField
        inputProps={{
          style: {padding: '0px 5px 5px 10px '}
        }}
        className={classes.textField}
        placeholder="Add Task"
        variant="standard"
        value={input}
        autoComplete="off"
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

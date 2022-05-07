import React, {useState} from 'react'

import useUpdateProject from 'hooks/mutations/projects/useUpdateProject'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {useStyle} from './components'

import handleFormChange from 'utils/forms/handleChange'
import {compareFormStates} from 'utils/forms/compareFormStates'

export default function ProjectUpdateForm({project}) {
  const {id, name, description} = project
  const INITIAL_STATE = {
    name: name,
    description: description
  }
  const [formState, setFormState] = useState(INITIAL_STATE)
  const {updateProject} = useUpdateProject()

  function handleEvent(event) {
    handleFormChange(event, formState, setFormState)
  }

  async function onUpdateProjectClick() {
    if (formState.name && !compareFormStates(formState, INITIAL_STATE)) {
      await updateProject(id, formState.name, formState.description)
    }
  }
  const classes = useStyle()

  return (
    <Box className={classes.root}>
      <TextField
        id="name"
        className={classes.textField}
        placeholder="Project Name"
        value={formState.name}
        onBlur={(e) => handleEvent(e)}
        onChange={(e) => handleEvent(e)}
      ></TextField>
      <TextField
        id="description"
        className={classes.textField}
        placeholder="Write Description Here ..."
        value={formState.description}
        onBlur={(e) => handleEvent(e)}
        onChange={(e) => handleEvent(e)}
        multiline
        rows={10}
      ></TextField>
      <Button
        className={classes.button}
        onClick={() => onUpdateProjectClick()}
        variant="contained"
      >
        Update Project
      </Button>
    </Box>
  )
}

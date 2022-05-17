import React, {useState} from 'react'

import useUpdateProject from 'hooks/mutations/projects/useUpdateProject'

import Box from '@mui/material/Box'
import CustomAreaField from 'components/entity/mui/CustomAreaField'
import {useStyle} from './components'

import handleFormChange from 'utils/forms/handleChange'
import compareFormStates from 'utils/forms/compareFormStates'
import CustomButton from 'components/entity/mui/CustomButton'

export default function ProjectUpdateForm({project}) {
  const {id, name, description} = project
  const INITIAL_STATE = {
    name: name,
    description: description ? description : ''
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
      <CustomAreaField
        id="name"
        label="Name"
        placeholder="Project Name"
        value={formState.name}
        onBlur={(e) => handleEvent(e)}
        onChange={(e) => handleEvent(e)}
      ></CustomAreaField>
      <CustomAreaField
        id="description"
        label="Description"
        placeholder="Write Description Here ..."
        value={formState.description}
        onBlur={(e) => handleEvent(e)}
        onChange={(e) => handleEvent(e)}
        multiline
        rows={10}
      ></CustomAreaField>
      <CustomButton onClick={() => onUpdateProjectClick()}>
        Update Project
      </CustomButton>
    </Box>
  )
}

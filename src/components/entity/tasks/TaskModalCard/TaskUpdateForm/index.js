import React, {useState} from 'react'

import useUpdateTask from 'hooks/mutations/tasks/useUpdateTask'

import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import CustomAreaField from 'components/entity/mui/CustomAreaField'
import CustomButton from 'components/entity/mui/CustomButton'
import {useStyle} from './components'

import handleFormChange from 'utils/forms/handleChange'
import compareFormStates from 'utils/forms/compareFormStates'

export default function TaskUpdateForm({task}) {
  const {id, title, description, status} = task
  const INITIAL_FORM_STATE = {
    title: title,
    description: description ? description : '',
    status: status
  }
  const [formState, setFormState] = useState(INITIAL_FORM_STATE)
  const {updateTask, error, loading} = useUpdateTask()

  function handleEvent(event) {
    handleFormChange(event, formState, setFormState)
    console.log(error, formState)
  }

  async function onUpdateTaskClick() {
    if (formState.title && !compareFormStates(formState, INITIAL_FORM_STATE)) {
      await updateTask(id, formState)
    }
  }
  const classes = useStyle()
  return (
    <Box className={classes.root}>
      <FormControl>
        <CustomAreaField
          id="title"
          label="Title"
          placeholder="Task title"
          value={formState.title}
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
        <RadioGroup
          value={formState.status}
          defaultValue={status}
          onChange={(e) => handleEvent(e)}
          className={classes.radioGroup}
          row
        >
          <FormControlLabel
            name="status"
            className={classes.radioLabel}
            value="NOT_STARTED"
            control={<Radio className={classes.radioButton} />}
            label="Not Started"
          />
          <FormControlLabel
            name="status"
            className={classes.radioLabel}
            value="STARTED"
            control={<Radio className={classes.radioButton} />}
            label="Started"
          />
          <FormControlLabel
            name="status"
            className={classes.radioLabel}
            value="FINISHED"
            control={<Radio className={classes.radioButton} />}
            label="Finished"
          />
        </RadioGroup>
        <CustomButton onClick={() => onUpdateTaskClick()} disabled={loading}>
          Update Task
        </CustomButton>
      </FormControl>
    </Box>
  )
}

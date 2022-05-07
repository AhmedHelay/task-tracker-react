import React, {useState} from 'react'

import useCreateProject from 'hooks/mutations/projects/useCreateProject'

import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import CustomTextField from 'components/entity/mui/CustomTextField'
import CustomButton from 'components/entity/mui/CustomButton'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import ClearIcon from '@mui/icons-material/Clear'

import {useStyle} from './components'

export default function ProjectCreateForm() {
  const [input, setInput] = useState('')
  const [disabled, setdisabled] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const {createProject} = useCreateProject()
  const classes = useStyle()

  async function handleClick() {
    if (input && input.length > 0) {
      setdisabled(true)
      await createProject(input)
      setInput('')
    }
    setdisabled(false)
  }

  return (
    <Box className={classes.root}>
      <Collapse in={showForm}>
        <Box className={classes.form}>
          <CustomTextField
            placeholder="Project Name"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
            }}
          />
          <Box className={classes.action}>
            <CustomButton
              disabled={disabled}
              color="success"
              onClick={handleClick}
            >
              Create Project
            </CustomButton>
            <IconButton
              className={classes.iconButton}
              sx={{color: '#912000'}}
              onClick={() => setShowForm(false)}
            >
              <ClearIcon />
            </IconButton>
          </Box>
        </Box>
      </Collapse>
      <Collapse in={!showForm}>
        <IconButton
          className={classes.iconButton}
          color="success"
          onClick={() => setShowForm(true)}
        >
          <AddIcon fontSize="large" />
        </IconButton>
      </Collapse>
    </Box>
  )
}

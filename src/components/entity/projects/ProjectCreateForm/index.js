import React, {useState} from 'react'

import useCreateProject from 'hooks/mutations/projects/useCreateProject'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
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
    <Grid container>
      <Box className={classes.root}>
        <Collapse in={showForm}>
          <Box className={classes.form}>
            <TextField
              inputProps={{
                style: {padding: '0px 5px 5px 10px '}
              }}
              className={classes.textField}
              placeholder="Project Name"
              variant="standard"
              value={input}
              autoComplete="off"
              onChange={(e) => {
                setInput(e.target.value)
              }}
            />
            <Box className={classes.action}>
              <Button
                className={classes.button}
                disabled={disabled}
                color="success"
                variant="contained"
                onClick={handleClick}
              >
                Create Project
              </Button>
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
    </Grid>
  )
}

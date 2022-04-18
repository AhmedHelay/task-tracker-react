import React, {useState} from 'react'
import {Button, Collapse, Grid, IconButton, TextField} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ClearIcon from '@mui/icons-material/Clear'

export default function ProjectCreateForm({onCreateClick}) {
  const [input, setInput] = useState('')
  const [disabled, setdisabled] = useState(false)
  const [showForm, setShowForm] = useState(false)

  async function handleClick() {
    if (input && input.length > 0) {
      setdisabled(true)
      await onCreateClick(input)
      setInput('')
    }
    setdisabled(false)
  }

  return (
    <Grid
      sx={{
        bgcolor: '#1a1c1e',
        maxWidth: 200,
        minWidth: 200,
        p: 2,
        borderRadius: 3
      }}
      container
      alignItems="center"
      justifyContent="center"
    >
      <Collapse in={showForm}>
        <TextField
          sx={{
            input: {color: 'white', fontWeight: 'bold'},
            bgcolor: '#6b6867',
            borderRadius: 2,
            autoComplete: 'off',
            mb: 2
          }}
          variant="outlined"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />
        <Button
          sx={{
            fontWeight: 'bold',
            mb: 1
          }}
          disabled={disabled}
          variant="contained"
          onClick={handleClick}
        >
          Create Project
        </Button>
        <IconButton
          sx={{color: '#4d1100'}}
          color="warning"
          onClick={() => setShowForm(false)}
        >
          <ClearIcon />
        </IconButton>
      </Collapse>
      <Collapse in={!showForm}>
        <IconButton
          sx={{color: 'white  ', bgcolor: '#6b6867'}}
          onClick={() => setShowForm(true)}
        >
          <AddIcon />
        </IconButton>
      </Collapse>
    </Grid>
  )
}

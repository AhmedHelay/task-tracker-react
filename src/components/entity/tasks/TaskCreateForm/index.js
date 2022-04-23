import React, {useState} from 'react'
import {Button, Grid, TextField} from '@mui/material'

export default function TaskCreateForm({id, onCreateClick}) {
  const [input, setInput] = useState('')
  const [disabled, setdisabled] = useState(false)

  async function handleClick() {
    if (input && input.length > 0) {
      setdisabled(true)
      await onCreateClick(id, input, undefined, 'NOT_STARTED')
      setInput('')
    }
    setdisabled(false)
  }

  return (
    <Grid sx={{pb: 1}} container alignItems="center" justifyContent="center">
      <TextField
        sx={{
          input: {color: 'white', fontWeight: 'bold'},
          bgcolor: '#6b6867',
          maxWidth: 200,
          borderRadius: 2,
          autoComplete: 'off',
          mb: 2,
          mt: 2
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
          minWidth: 200,
          mb: 1
        }}
        disabled={disabled}
        variant="contained"
        onClick={handleClick}
      >
        Create Task
      </Button>
    </Grid>
  )
}

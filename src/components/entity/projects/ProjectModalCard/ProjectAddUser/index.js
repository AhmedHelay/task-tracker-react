import React, {useState} from 'react'

import useAddUserToProject from 'hooks/mutations/projects/useAddUserToProject'
import {useQuery} from '@apollo/client'
import {USERS} from 'api/query/users'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import {useStyle} from './components'

import canAddUserToProject from './utils'

export default function ProjectAddUser({project}) {
  const [email, setEmail] = useState()
  const {addUserToProject, loading} = useAddUserToProject()
  const {data} = useQuery(USERS)
  async function addUserClick() {
    if (canAddUserToProject(project, data, email)) {
      const userId = data?.users.find((user) => user.email === email)?.id
      await addUserToProject(project.id, userId)
    }
  }
  const classes = useStyle()
  return (
    <Box className={classes.root}>
      <Box className={classes.form}>
        <TextField
          inputProps={{
            style: {padding: '0px 5px 5px 10px '}
          }}
          className={classes.textField}
          placeholder="Email"
          variant="standard"
          value={email}
          autoComplete="off"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <Button
          className={classes.button}
          variant="contained"
          disabled={loading}
          onClick={() => addUserClick()}
        >
          Add User
        </Button>
      </Box>
      <Box className={classes.users}>
        {project.users.map((user) => (
          <Typography className={classes.email} key={user.id} id={user.id}>
            {user.email}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}

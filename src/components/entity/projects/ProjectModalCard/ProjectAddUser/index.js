import React, {useState} from 'react'

import useAddUserToProject from 'hooks/mutations/projects/useAddUserToProject'
import {useQuery} from '@apollo/client'
import {USERS} from 'api/query/users'

import Box from '@mui/material/Box'
import CustomButton from 'components/entity/mui/CustomButton'
import CustomTextField from 'components/entity/mui/CustomTextField'
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
        <CustomTextField
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <CustomButton disabled={loading} onClick={() => addUserClick()}>
          Add User
        </CustomButton>
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

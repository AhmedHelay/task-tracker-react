import React, {useState} from 'react'

import useAddUserToProject from 'hooks/mutations/projects/useAddUserToProject'
import {useQuery} from '@apollo/client'
import {USERS} from 'api/query/users'

import Box from '@mui/material/Box'
import CustomButton from 'components/entity/mui/CustomButton'
import CustomAreaField from 'components/entity/mui/CustomAreaField'
import CustomLabel from 'components/entity/mui/CustomLabel'
// import Typography from '@mui/material/Typography'
import {useStyle} from './components'

import canAddUserToProject from './utils'
import UserCard from 'components/entity/users/UserCard'

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
      <CustomLabel label="Project Users" />
      <Box className={classes.users}>
        {project?.users?.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            email={user.email}
            firstName={user.firstName}
            lastName={user.lastName}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </Box>
      <Box className={classes.form}>
        <CustomAreaField
          placeholder="Type email here..."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <CustomButton disabled={loading} onClick={() => addUserClick()}>
          Add User
        </CustomButton>
      </Box>
    </Box>
  )
}

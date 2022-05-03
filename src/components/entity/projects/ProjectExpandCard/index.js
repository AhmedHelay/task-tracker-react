import React, {useState} from 'react'

import {useQuery} from '@apollo/client'
import {USERS} from 'api/query/users'

import {Grid, IconButton, MenuItem, Select, Typography} from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import {Button} from '@material-ui/core'

import {ExpandCardWrapper} from 'components/entity/components'
import UserCard from 'components/entity/users/UserCard'

import handleFormChange from 'utils/forms/handleChange'
import useAddUserToProject from 'hooks/mutations/projects/useAddUserToProject'
import useUpdateProject from 'hooks/mutations/projects/useUpdateProject'

export default function ProjectExpandCard({project, onCloseCardClick}) {
  const {data} = useQuery(USERS)
  const [formState, setFormState] = useState({})
  const [userId, setUserId] = useState()

  const {addUserToProject} = useAddUserToProject()
  const {updateProject} = useUpdateProject()

  const creator = project.creator
  const INITIAL_STATE = {
    name: project.name,
    description: project.description
  }

  function handleEventChange(event) {
    if (userId > 100000) {
      setUserId(event.target.value)
      handleFormChange(event, formState, setFormState)
    }
  }

  async function handleAddUserClick() {
    await addUserToProject(project.id, userId)
  }

  async function handleUpdateClick() {
    if (
      (formState.name !== INITIAL_STATE.name ||
        formState.description !== INITIAL_STATE.description) &&
      formState.name.length > 1
    )
      await updateProject(project.id, formState.name, formState.description)
  }

  return (
    <ExpandCardWrapper>
      <Grid
        sx={{
          bgcolor: '#121212',
          width: '800px',
          height: '700px',
          borderRadius: '20px'
        }}
      >
        <Typography>Creator</Typography>
        <UserCard
          key={creator.id}
          id={creator.id}
          email={creator.email}
          firstName={creator.firstName}
          lastName={creator.lastName}
          avatarUrl={creator.avatarUrl}
        />
        <IconButton
          sx={{color: '#4d1100'}}
          color="warning"
          onClick={() => onCloseCardClick(false)}
        >
          <ClearIcon />
        </IconButton>
        <Button onClick={handleUpdateClick}>Update</Button>
        <Select
          value={userId}
          label="Select User"
          onChange={(e) => handleEventChange(e)}
        >
          {data?.users?.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.email}
            </MenuItem>
          ))}
        </Select>
        <Button onClick={() => handleAddUserClick()}> Add User</Button>
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
      </Grid>
    </ExpandCardWrapper>
  )
}

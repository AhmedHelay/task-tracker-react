import React from 'react'

import {Avatar, Grid, Tooltip} from '@mui/material'
import {Card, Img, Text} from '../components'

export default function UserCard({firstName, lastName, email, avatarUrl}) {
  function getShortName() {
    if (firstName && lastName) return firstName.charAt(0) + lastName.charAt(0)
    else return 'A'
  }

  function getFullName() {
    if (firstName && lastName) return firstName + ' ' + lastName
    else return 'Anonymous'
  }

  return (
    <Card>
      <Grid container alignItems="center" justifyContent="start">
        <Tooltip title={getFullName()} placement="top" arrow>
          {avatarUrl ? (
            <Img src={avatarUrl} />
          ) : (
            <Avatar sx={{bgcolor: '#6400f7', width: 50, height: 50}}>
              {getShortName(firstName, lastName)}
            </Avatar>
          )}
        </Tooltip>
        <Text>{email}</Text>
      </Grid>
    </Card>
  )
}

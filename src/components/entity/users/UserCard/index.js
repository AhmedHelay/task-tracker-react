import React from 'react'

import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Tooltip from '@mui/material/Tooltip'
import {Card, Img, Text} from '../components'

export default function UserCard({firstName, lastName, email, avatarUrl}) {
  const shortName = () =>
    firstName && lastName ? firstName.charAt(0) + lastName.charAt(0) : 'A'

  const fullName = () =>
    firstName && lastName ? firstName + ' ' + lastName : 'Anonymous'

  return (
    <Card>
      <Grid container alignItems="center" justifyContent="start">
        <Tooltip title={fullName()} placement="top" arrow>
          {avatarUrl ? (
            <Img src={avatarUrl} />
          ) : (
            <Avatar sx={{bgcolor: '#6400f7', width: 50, height: 50}}>
              {shortName()}
            </Avatar>
          )}
        </Tooltip>
        <Text>{email}</Text>
      </Grid>
    </Card>
  )
}

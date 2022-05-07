import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {useStyle} from './components'
import UserAvatar from './UserAvatar'

export default function UserCard({firstName, lastName, email}) {
  const classes = useStyle()
  return (
    <Box className={classes.root}>
      <Box className={classes.body}>
        <UserAvatar firstName={firstName} lastName={lastName} />
        <Typography className={classes.email}>{email}</Typography>
      </Box>
    </Box>
  )
}

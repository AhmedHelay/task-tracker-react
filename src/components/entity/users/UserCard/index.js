import React from 'react'

import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import {useStyle} from './components'

export default function UserCard({firstName, lastName, email}) {
  const shortName = () =>
    firstName && lastName ? firstName.charAt(0) + lastName.charAt(0) : 'A'

  const fullName = () =>
    firstName && lastName ? firstName + ' ' + lastName : 'Anonymous'

  const classes = useStyle()
  return (
    <Box className={classes.root}>
      <Box className={classes.body}>
        <Tooltip title={fullName()} placement="top" arrow>
          <Avatar className={classes.avatar}>{shortName()}</Avatar>
        </Tooltip>
        <Typography className={classes.email}>{email}</Typography>
      </Box>
    </Box>
  )
}

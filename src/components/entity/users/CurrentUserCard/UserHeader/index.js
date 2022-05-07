import React from 'react'

import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Box from '@material-ui/core/Box'
import {useStyle} from './components'
import {Img} from '../../components'

export default function UserHeader({user}) {
  const {avatarUrl, firstName} = user
  const classes = useStyle()

  return (
    <Box className={classes.root}>
      {avatarUrl ? (
        <Img src={avatarUrl} />
      ) : (
        <Avatar className={classes.avatar}>
          <Typography className={classes.text}>
            {firstName ? firstName.charAt(0).toUpperCase() : 'A'}
          </Typography>
        </Avatar>
      )}
    </Box>
  )
}

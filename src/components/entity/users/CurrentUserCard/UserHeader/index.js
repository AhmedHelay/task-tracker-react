import React from 'react'

import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Box from '@material-ui/core/Box'
import {Img} from '../../components'

export default function UserHeader({user}) {
  const {avatarUrl, firstName} = user
  return (
    <Box
      sx={{
        p: 1,
        display: 'inline-block'
      }}
      justifyContent="start"
      alignItems="center"
    >
      {avatarUrl ? (
        <Img src={avatarUrl} />
      ) : (
        <Avatar sx={{bgcolor: '#6400f7', width: 70, height: 70, m: 2}}>
          <Typography sx={{color: 'white', fontSize: 40, fontWeight: 'bold'}}>
            {firstName ? firstName.charAt(0).toUpperCase() : 'A'}
          </Typography>
        </Avatar>
      )}
    </Box>
  )
}

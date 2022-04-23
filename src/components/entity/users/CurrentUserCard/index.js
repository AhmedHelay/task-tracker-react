import React from 'react'

import {Avatar, Grid} from '@mui/material'
import {Typography} from '@material-ui/core'
import {Wrapper} from 'components/entity/components'
import {Img} from '../components'

export default function CurrentUserCard({me}) {
  const {firstName, avatarUrl} = me
  return (
    <Wrapper>
      <Grid
        sx={{
          bgcolor: '#6b6867',
          minWidth: '500px',
          width: '700px',
          height: '900px',
          borderRadius: '30px'
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          sx={{
            display: 'flex',
            padding: '20px'
          }}
        >
          {avatarUrl ? (
            <Img src={avatarUrl} />
          ) : (
            <Avatar sx={{bgcolor: '#6400f7', width: 70, height: 70}}>
              <Typography sx={{color: 'white', fontWeight: 'bold'}}>
                {firstName ? firstName.charAt(0) : 'A'}
              </Typography>
            </Avatar>
          )}
          <Typography variant="h1"> {firstName}</Typography>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

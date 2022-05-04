import React from 'react'

import Grid from '@mui/material/Grid'
import {Wrapper} from 'components/entity/components'
export default function CurrentUserCard({children}) {
  return (
    <Wrapper>
      <Grid container justifyContent="start" alignItems="center">
        <Grid
          sx={{
            bgcolor: '#1a1c1e',
            width: '500px',
            height: '750px',
            borderRadius: '30px'
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Wrapper>
  )
}

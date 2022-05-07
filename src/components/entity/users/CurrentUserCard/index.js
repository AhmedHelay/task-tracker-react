import React from 'react'

import Box from '@mui/material/Box'
import {Wrapper} from 'components/entity/components'
export default function CurrentUserCard({children}) {
  return (
    <Wrapper>
      <Box
        container
        justifyContent="start"
        alignItems="center"
        sx={{
          bgcolor: '#1a1c1e',
          width: '400px',
          height: '500px',
          borderRadius: '10px'
        }}
      >
        {children}
      </Box>
    </Wrapper>
  )
}

import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {useStyle} from './components'

export default function TaskCard({title, onTaskShowClick}) {
  const classes = useStyle()

  return (
    <Box onClick={() => onTaskShowClick()} className={classes.root}>
      <Typography className={classes.title} gutterBottom component="div">
        {title}
      </Typography>
    </Box>
  )
}

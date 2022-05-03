import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Card, IconButton, Typography} from '@mui/material'

import ZoomInIcon from '@mui/icons-material/ZoomIn'
import DeleteIcon from '@mui/icons-material/Delete'
import useDestoryTask from 'hooks/mutations/tasks/useDestroyTask'

const useStyle = makeStyles(() => ({
  root: {
    'min-width': '200px',
    'min-height': '100px',
    padding: '10px',
    'margin-bottom': '20px',
    'margin-right': '2x',
    'border-radius': '10px',
    'background-color': '#6b6867',
    height: 'auto'
  }
}))

export default function TaskCard({
  id,
  title,
  status,
  createdAt,
  onTaskShowClick
}) {
  const {destroyTask} = useDestoryTask()
  const classes = useStyle()

  function handleDestroy() {
    const result = confirm('Are you sure you want to delete this Task ?')
    if (result) destroyTask(id)
  }
  return (
    <Card className={classes.root}>
      <Typography
        sx={{color: 'white', fontWeight: 'bold'}}
        gutterBottom
        variant="h5"
        component="div"
      >
        {title}
      </Typography>
      {createdAt}
      <Typography
        sx={{color: 'black', mt: 2, mb: 1, fontSize: 20, fontWeight: 'bold'}}
      >
        {status}
      </Typography>
      <IconButton
        sx={{color: '#619cff'}}
        color="info"
        onClick={onTaskShowClick}
      >
        <ZoomInIcon />
      </IconButton>
      <IconButton
        sx={{color: '#4d1100'}}
        color="warning"
        onClick={() => {
          handleDestroy()
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Card>
  )
}

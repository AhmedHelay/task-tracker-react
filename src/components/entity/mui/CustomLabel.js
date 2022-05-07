import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import Typography from '@mui/material/Typography'

export default function CustomLabel({label}) {
  const useStyle = makeStyles(() => ({
    label: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      marginLeft: '5px',
      marginBottom: '5px'
    }
  }))
  const classes = useStyle()
  return <Typography className={classes.label}>{label}</Typography>
}

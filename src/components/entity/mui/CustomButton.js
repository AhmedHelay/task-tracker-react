import React from 'react'

import Button from '@mui/material/Button'
import makeStyles from '@material-ui/styles/makeStyles'

export default function CustomButton({children, color, onClick, disabled}) {
  const useStyle = makeStyles(() => ({
    button: {
      fontWeight: 'bold',
      width: '200px'
    }
  }))
  const classes = useStyle()
  return (
    <Button
      className={classes.button}
      color={color}
      disabled={disabled}
      onClick={onClick}
      variant="contained"
    >
      {children}
    </Button>
  )
}

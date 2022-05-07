import React from 'react'
import TextField from '@mui/material/TextField'
import makeStyles from '@material-ui/styles/makeStyles'

export default function CustomTextField({
  placeholder,
  value,
  onChange,
  children
}) {
  const useStyle = makeStyles(() => ({
    textField: {
      width: 180,
      borderColor: 'white',
      marginLeft: 10,
      height: 40,
      autoComplete: 'off',
      '& .MuiInputBase-input': {
        fontWeight: 'bold',
        color: '#fff' // Text color
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: '#fff8'
      },
      '& .MuiInput-underline:hover:before': {
        borderBottomColor: '#fff'
      }
    }
  }))
  const classes = useStyle()
  return (
    <TextField
      className={classes.textField}
      inputProps={{
        style: {padding: '0px 5px 5px 10px '}
      }}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      variant="standard"
      autoComplete="off"
    >
      {children}
    </TextField>
  )
}

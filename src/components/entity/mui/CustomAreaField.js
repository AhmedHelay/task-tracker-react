import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import TextField from '@mui/material/TextField'

export default function CustomAreaField({
  id,
  value,
  placeholder,
  onBlur,
  onChange,
  rows
}) {
  const useStyle = makeStyles(() => ({
    textField: {
      backgroundColor: '#6b6867',
      borderRadius: '10px',
      marginBottom: '10px',
      width: '500px'
    }
  }))
  const classes = useStyle()
  return (
    <TextField
      id={id}
      placeholder={placeholder}
      className={classes.textField}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      multiline
      rows={rows}
    />
  )
}

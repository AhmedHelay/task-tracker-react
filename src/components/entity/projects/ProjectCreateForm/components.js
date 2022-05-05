import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    backgroundColor: '#1a1c1e',
    minWidth: 300,
    borderRadius: 5
  },

  form: {
    padding: '30px 10px 20px 10px'
  },

  textField: {
    width: 250,
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
  },

  action: {
    display: 'flex',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  button: {
    fontWeight: 'bold'
  },

  iconButton: {
    '&:hover': {
      background: '#403d3d'
    }
  }
}))

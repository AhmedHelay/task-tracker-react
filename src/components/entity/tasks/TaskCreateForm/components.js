import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    paddingTop: 15
  },

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
  },

  icon: {
    marginLeft: 10,
    marginBottom: 6,
    color: 'green',
    '&:hover': {
      background: '#403d3d'
    }
  }
}))

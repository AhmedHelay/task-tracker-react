import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    padding: '10px'
  },

  textField: {
    backgroundColor: '#6b6867',
    borderRadius: '10px',
    marginBottom: '10px',
    width: '500px'
  },

  button: {
    fontWeight: 'bold',
    marginTop: '10px',
    width: '200px'
  }
}))

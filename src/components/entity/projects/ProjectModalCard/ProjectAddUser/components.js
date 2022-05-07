import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    paddingRight: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  form: {
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column'
  },

  users: {
    marginTop: '-40px',
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    maxHeight: '200px',
    border: '2px solid #6b6867',
    borderRadius: '10px',
    padding: '10px 20px 20px 20px',
    'overflow-y': 'auto',
    'overflow-x': 'auto',
    '&::-webkit-scrollbar-thumb': {
      height: '10px',
      width: '10px',
      borderRadius: '10px',
      background: 'gray'
    },
    '&::-webkit-scrollbar': {
      height: '10px',
      width: '10px',
      borderRadius: '10px',
      backgroundColor: '#1a1c1e'
    }
  },

  email: {
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: '10px'
  }
}))

import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    maxWidth: '400px',
    flexDirection: 'column',
    width: '400px',
    marginLeft: '20px'
  },

  users: {
    height: '280px',
    border: '5px solid #6b6867',
    borderRadius: '10px',
    padding: '5px 5px 5px 5px',
    'overflow-y': 'auto',
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

  form: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

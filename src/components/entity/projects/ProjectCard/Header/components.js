import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    padding: '5px 10px 5px 10px',
    marginBottom: '30px',
    justifyContent: 'space-between',
    alignItems: 'start',
    minHeight: '40px',
    maxHeight: '300px',
    'overflow-y': 'auto',
    '-webkit-user-select': 'none',
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

  name: {
    marginTop: '10px',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    width: '130px',
    fontSize: '15px',
    color: '#ffffff'
  },

  icon: {
    '&:hover': {
      background: '#403d3d'
    }
  }
}))

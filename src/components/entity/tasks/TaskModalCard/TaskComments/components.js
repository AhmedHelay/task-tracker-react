import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    height: '650px',
    marginLeft: '20px'
  },
  comments: {
    padding: '10px',
    border: '5px solid #6b6867',
    maxHeight: '100%',
    borderRadius: '10px',
    height: '100%',
    'overflow-y': 'auto',
    display: 'flex',
    flexDirection: 'column',
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
  }
}))

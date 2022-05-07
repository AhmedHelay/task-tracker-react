import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  wrapper: {
    position: ' absolute',
    top: ' 0',
    left: ' 0',
    height: ' 100%',
    width: ' 100%',
    overflow: ' hidden',
    backgroundColor: '#000000e1',
    display: ' flex',
    alignItems: ' center',
    justifyContent: ' center',

    'overflow-y': ' auto',
    'overflow-x': ' auto',
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

  root: {
    width: 'auto',
    height: 'auto',
    padding: '10px',
    marginRight: '25px',
    borderRadius: '10px',
    backgroundColor: '#1a1c1e',
    overFlow: 'auto',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start'
  },

  content: {
    width: '100%',
    padding: '10px'
  }
}))

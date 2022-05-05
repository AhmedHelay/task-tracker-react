import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    maxWidth: '580px',
    maxHeight: '600px',
    minWidth: '580px',
    minHeight: '600px',
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
    width: '100%'
  }
}))

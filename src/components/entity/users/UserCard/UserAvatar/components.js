import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  avatar: {
    backgroundColor: '#6b6867',
    width: '50px',
    borderRadius: '50%',
    height: '50px',
    'overflow-y': 'auto',
    display: 'flex',
    flexDirection: 'column'
  }
}))

import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    padding: '10px'
  },

  action: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

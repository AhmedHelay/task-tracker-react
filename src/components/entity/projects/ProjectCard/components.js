import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    minWidth: '250px',
    maxWidth: '250px',
    padding: '5px',
    marginRight: '15px',
    borderRadius: '5px',
    backgroundColor: '#1a1c1e',
    maxHeight: '95%',
    overFlowY: 'auto',
    display: 'flex',
    flexDirection: 'column'
  }
}))

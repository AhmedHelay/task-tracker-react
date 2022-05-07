import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#a8a2a0',
    borderRadius: '10px',
    marginBottom: '10px'
  },
  sideBar: {
    padding: '10px 10px 0px 10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    padding: '10px 10px 10px 15px',
    wordBreak: 'break-word',
    color: 'white'
  }
}))

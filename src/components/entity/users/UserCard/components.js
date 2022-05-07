import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    marginBottom: '5px'
  },

  body: {
    display: 'flex',
    border: '2px solid #6b6867',
    borderRadius: '10px',
    padding: '10px',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center'
  },

  avatar: {
    backgroundColor: '#6b6867',
    width: '50px',
    borderRadius: '50%',
    height: '50px',
    'overflow-y': 'auto',
    display: 'flex',
    flexDirection: 'column'
  },

  email: {
    paddingLeft: '10px',
    fontWeight: 'bold',
    fontFamily: 'monspace',
    fontSize: '18px',
    color: 'white'
  }
}))

import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    padding: '5px 10px 5px 10px',
    marginBottom: '10px',
    justifyContent: 'space-between',
    alignItems: 'start',
    maxHeight: '35px',
    'overflow-y': 'hidden'
  },

  name: {
    marginTop: '10px',
    fontWeight: 'bold',
    fontFamily: 'arial',
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

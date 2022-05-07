import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#1a1c1e',
    width: '70px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    top: 0
  },

  iconButton: {
    marginTop: '20px',
    borderRaduis: '50%',
    marginLeft: '10px',
    marginRight: '10px',
    transition: 'all 0.5s ease',
    '&:hover': {
      backgroundColor: '#6b6867'
    }
  },
  icon: {
    color: '#ffffff',
    'font-size': '30px'
  }
}))

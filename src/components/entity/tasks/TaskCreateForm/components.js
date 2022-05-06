import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    paddingTop: 15
  },

  icon: {
    marginLeft: 10,
    marginBottom: 6,
    color: 'green',
    '&:hover': {
      background: '#403d3d'
    }
  }
}))

import {makeStyles} from '@material-ui/core'
import styled from 'styled-components'

export const NavList = styled.nav`
  background-color: #1a1c1e;
  width: 70px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  top: 0;
`
export const NavItem = styled.button`
  border: none;
  background-color: #1a1c1e;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 15px;
  transition: all 0.5s;
  border-radius: 20px;
  margin: 10px 5px 0px 5px;
  transition: all 0.5s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    background-color: #272930;
  }
`

export const useStyles = makeStyles(() => ({
  icon: {
    color: '#ffffff',
    size: '12px',
    'font-size': '30px',
    transition: 'all 0.5s ease',
    '&:hover': {
      color: '#6400f7'
    }
  }
}))

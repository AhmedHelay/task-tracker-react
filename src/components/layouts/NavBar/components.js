import styled from 'styled-components'

export const NavList = styled.nav`
  background-color: #1a1c1e;
  width: 70px;
  height: 100vh;
  display: inline;
  justify-content: center;
  position: fixed;
  top: 0;
`
export const NavItem = styled.button`
  border: none;
  background-color: #1a1c1e;
  display: flex;
  justify-content: start;
  font-size: 30px;
  align-items: center;
  padding: 15px;
  transition: all 0.5s;
  border-radius: 20px;
  margin: 10px 5px 0px 5px;
  &:hover {
    background-color: #272930;
  }
`

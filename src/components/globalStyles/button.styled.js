import styled from 'styled-components'

export const StyledButton = styled.button`
  margin-top: 15px;
  margin-left: 10px;
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  background-color: ${({bg}) => bg || '#fff'};
  color: ${({color}) => color || '#333'};
  border: 0;
  border-radius: 7px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    background-color: ${({hbg}) => hbg || 'green'};
    color: white;
  }
`

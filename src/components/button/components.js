import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: ${({bg}) => bg || 'black'};
  border-radius: 5px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  height: 50px;
  margin-top: 30px;
  width: 100%;
  transition: all 0.5s cubic-bezier(0.02, 0.01, 0.47, 1);
  -webkit-user-select: none;

  &:hover {
    background-color: ${({hover}) => hover || 'black'};
    color: white;
  }
`

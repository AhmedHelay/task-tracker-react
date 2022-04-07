import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: #08d;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  ont-size: 20px;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 38px;
  text-align: center;
  width: 100%;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    background-color: ${({hover}) => hover || 'white'};
    color: white;
  }
`

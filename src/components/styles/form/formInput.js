import styled from 'styled-components'

export const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  border-radius: 5px;
  display: inline-block;
  position: relative;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`

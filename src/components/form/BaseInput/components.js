import styled, {css} from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
`

export const FormBaseInput = styled.div(({$isError}) => {
  return css`
    -webkit-user-select: none;
    background-color: #6b6867;
    border-radius: 5px;
    border: solid ${$isError ? 'red' : '#6b6867'};
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    margin-top: 4px;
  `
})

export const FormInputLabel = styled.label`
  color: #eee;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 600;
`

export const FormInputError = styled.p`
  color: red;
  font-size: small;
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
`

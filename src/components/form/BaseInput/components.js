import styled from 'styled-components'

export const FormBaseInput = styled.div`
  background-color: #fff;
  border-radius: 15px;
  border: 0;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  margin-top: 4px;
`

export const FormInputLabel = styled.label`
  color: #eee;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 600;
  padding-left: 1%;
`

export const FormInputError = styled.p`
  color: yellow;
  font-size: small;
  font-size: 15px;
  font-weight: bold;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
`

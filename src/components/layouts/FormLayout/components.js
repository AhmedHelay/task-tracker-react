import styled, {keyframes} from 'styled-components'
import {slideInLeft} from 'react-animations'

const slideInLeftAnimation = keyframes`${slideInLeft}`

export const FormPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
`

export const Form = styled.div`
  background-color: #1a1c1e;
  border-radius: 20px;
  font-family: arial;
  text-align: left;
  padding: 0px 20px 20px 20px;
  animation: 1s ${slideInLeftAnimation};
`

export const FormTitle = styled.p`
  color: #eee;
  font-size: 36px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 10px;
`

export const FormInputsContainer = styled.form`
  margin-bottom: 20px;
`

export const FormSubmitMessage = styled.p`
  color: ${({color}) => color || 'white'};
  font-weight: 400;
  margin-bottom: 30px;
`

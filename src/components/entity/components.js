import styled, {keyframes} from 'styled-components'
import {fadeInUp, fadeInDown} from 'react-animations'

const fadeInUpAnimation = keyframes`${fadeInUp}`
const fadeInDownAnimation = keyframes`${fadeInDown}`

export const Wrapper = styled.div`
  align-items: start;
  display: flex;
  margin: 10px;
  width: 100%;
  height: 95%;
  padding-top: 10px;
  overflow-y: auto;
  overflow-x: auto;
  animation: 1s ${fadeInUpAnimation};

  ::-webkit-scrollbar-thumb {
    height: 10px;
    width: 10px;
    border-radius: 10px;
    background: gray;
  }
  ::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    border-radius: 10px;
    background-color: #1a1c1e;
  }
`

export const ModalCardWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  animation: 0.5s ${fadeInDownAnimation};
  background-color: #000000e1;
  display: flex;
  align-items: center;
  justify-content: center;
`

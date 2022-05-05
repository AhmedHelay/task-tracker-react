import styled, {keyframes} from 'styled-components'
import fadeInUp from 'react-animations/lib/fade-in-up'

const fadeInUpAnimation = keyframes`${fadeInUp}`

export const Wrapper = styled.div`
  align-items: start;
  display: flex;
  margin: 10px;
  width: 100%;
  height: 95%;
  padding-top: 10px;
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
  background-color: #000000e1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  overflow-x: auto;

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

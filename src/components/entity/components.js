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
`

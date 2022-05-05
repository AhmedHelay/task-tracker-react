import React from 'react'
import styled from 'styled-components'

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  overflow-y: auto;

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

export default function TasksCardsWrapper({children}) {
  return <FlexWrap>{children}</FlexWrap>
}

import React from 'react'
import {Wrapper} from 'components/entity/components'

import styled from 'styled-components'

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
`

export default function UsersCardsWrapper({children}) {
  return (
    <Wrapper>
      <FlexWrap>{children}</FlexWrap>
    </Wrapper>
  )
}

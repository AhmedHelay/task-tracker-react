import styled from 'styled-components'

export const PageWrapper = styled.div`
  background: linear-gradient(
    0deg,
    rgba(41, 53, 60, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );

  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const PageLoading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const PageContent = styled.div`
  align-items: start;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-height: 100%;
  margin: 0px 10px 10px 10px;
  overflow-x: auto;
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

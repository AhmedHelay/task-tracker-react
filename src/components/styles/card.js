import styled from 'styled-components'

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`

export const CardInput = styled.input`
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

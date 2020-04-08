import React from 'react'
import styled from 'styled-components'

export const Layout = ({ children }) => (
  <Wrapper>
    <Box>{children}</Box>
  </Wrapper>
)

const Wrapper = styled.div`
  z-index: 10;
  position: relative;
  height: 100vh;
  padding: 25px;
  box-sizing: border-box;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 25px;
  box-sizing: border-box;
`

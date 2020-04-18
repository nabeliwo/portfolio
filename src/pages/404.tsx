import React from 'react'
import styled from 'styled-components'
import { VFXImg } from 'react-vfx'

const NotFound = () => (
  <Wrapper>
    <VFXImg src="/images/404_text.png" shader="glitch" width="410" height="486" alt="404 Not Found" />
  </Wrapper>
)

export default NotFound

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

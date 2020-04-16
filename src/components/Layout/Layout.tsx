import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { mediaQuery } from '../../themes'

export const Layout: FC = ({ children }) => (
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

  ${mediaQuery.spStyle(css`
    padding: 10px;
  `)}
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 25px;
  box-sizing: border-box;

  ${mediaQuery.spStyle(css`
    padding: 10px;
  `)}
`

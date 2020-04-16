import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { mediaQuery, space } from '../../themes'

import { SiteTitle } from '../SiteTitle'

export const Layout: FC = ({ children }) => (
  <Wrapper>
    <Box>
      <SiteTitle />
      {children}
    </Box>
  </Wrapper>
)

const Wrapper = styled.div`
  z-index: 10;
  position: relative;
  height: 100vh;
  padding: ${space.m}px;
  box-sizing: border-box;
  ${mediaQuery.spStyle(css`
    padding: 10px;
  `)}
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${space.m}px;
  box-sizing: border-box;
  ${mediaQuery.spStyle(css`
    padding: 10px;
  `)}
`

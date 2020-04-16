import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { mediaQuery, space } from '../../themes'

import { SiteTitle } from '../SiteTitle'
import { Navigation } from '../Navigation'

export const Layout: FC = ({ children }) => (
  <Wrapper>
    <Box>
      <SiteTitle />
      <Container>
        <Side>
          <Navigation />
        </Side>
        <Main>{children}</Main>
      </Container>
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
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
`
const Side = styled.div`
  margin-right: ${space.m}px;
`
const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* 40px === SiteTitle height */
  height: calc(100vh - ${space.m} - ${space.m} - 40px - ${space.m} - ${space.m});
`

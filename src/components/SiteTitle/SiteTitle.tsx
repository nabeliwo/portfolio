import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'

import { palette, space } from '../../themes'

export const SiteTitle = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => {
      const { title } = data.site.siteMetadata

      return (
        <Wrapper>
          <Title>{title}</Title>
          <Cursor />
        </Wrapper>
      )
    }}
  />
)

const FONT_SIZE = 40
const CURSOR_FLASH_TIME = 1.6
const flash = keyframes`
  0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: 1
  }
  100% {
    opacity: 1;
  }
`

const Wrapper = styled.h1`
  display: flex;
  align-items: center;
  margin-bottom: ${space.m}px;
`
const Title = styled.p`
  font-size: ${FONT_SIZE}px;
  line-height: 1;
  letter-spacing: 5px;
`
const Cursor = styled.span`
  display: inline-block;
  width: 4px;
  height: ${FONT_SIZE}px;
  margin-left: 5px;
  background-color: ${palette.BLUE};
  animation: ${flash} ${CURSOR_FLASH_TIME}s infinite;
`

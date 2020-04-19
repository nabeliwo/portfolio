import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled, { css, keyframes } from 'styled-components'

import { path } from '../../constants/application'
import { mediaQuery, palette } from '../../themes'

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
        <h1>
          <Wrapper to={path.root}>
            <Title>{title}</Title>
            <Cursor />
          </Wrapper>
        </h1>
      )
    }}
  />
)

const PC_FONT_SIZE = 40
const SP_FONT_SIZE = 30
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

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
`
const Title = styled.p`
  font-size: ${PC_FONT_SIZE}px;
  line-height: 1;
  letter-spacing: 5px;
  ${mediaQuery.spStyle(css`
    font-size: ${SP_FONT_SIZE}px;
  `)}
`
const Cursor = styled.span`
  display: inline-block;
  width: 4px;
  height: ${PC_FONT_SIZE}px;
  margin-left: 5px;
  background-color: ${palette.BLUE};
  animation: ${flash} ${CURSOR_FLASH_TIME}s infinite;
  ${mediaQuery.spStyle(css`
    height: ${SP_FONT_SIZE}px;
  `)}
`

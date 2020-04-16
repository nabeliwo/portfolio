import React, { useEffect, useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { palette, space } from '../../themes'

export const SiteTitle = () => {
  const CURSOR_FLASH_TIME = 800
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setCursorVisible((state) => !state)
    }, CURSOR_FLASH_TIME)
  }, [])

  return (
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
            <Cursor className={cursorVisible ? 'active' : ''} />
          </Wrapper>
        )
      }}
    />
  )
}

const FONT_SIZE = 40
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
  visibility: hidden;
  display: inline-block;
  width: 4px;
  height: ${FONT_SIZE}px;
  margin-left: 5px;
  background-color: ${palette.BLUE};

  &.active {
    visibility: visible;
  }
`

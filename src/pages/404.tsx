import React from 'react'
import styled from 'styled-components'
import { VFXImg, VFXProvider } from 'react-vfx'

import { mediaQuery, space } from '../themes'

import { Head } from '../components/Head'

const NotFound = () => {
  const image =
    typeof window !== 'undefined' && mediaQuery.isPc() ? (
      <VFXProvider>
        <VFXImg src="/images/404_text.png" shader="glitch" width="410" height="486" alt="404 Not Found" />
      </VFXProvider>
    ) : (
      <Text>
        404
        <br />
        Not
        <br />
        Found
      </Text>
    )

  return (
    <>
      <Head
        meta={[
          {
            name: 'robots',
            content: 'noindex',
          },
          {
            name: 'page',
            content: 'not-found',
          },
        ]}
      />
      <Wrapper>{image}</Wrapper>
    </>
  )
}

export default NotFound

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${space.xs * 2}px - ${space.xs * 2}px - 30px - ${space.m}px - 104px);
`
const Text = styled.p`
  font-size: 100px;
  line-height: 1.2;
`

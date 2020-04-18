import React from 'react'
import styled from 'styled-components'
import { VFXImg, VFXProvider } from 'react-vfx'

import { Head } from '../components/Head'

const NotFound = () => (
  <VFXProvider>
    <Head
      meta={[
        {
          name: 'robots',
          content: 'noindex',
        },
      ]}
    />
    <Wrapper>
      <VFXImg src="/images/404_text.png" shader="glitch" width="410" height="486" alt="404 Not Found" />
    </Wrapper>
  </VFXProvider>
)

export default NotFound

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

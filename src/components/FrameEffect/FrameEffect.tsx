import React, { memo, useEffect } from 'react'
import styled, { css } from 'styled-components'

import { mediaQuery } from '../../themes'

import { renderer } from './canvas/renderer'

export const FrameEffect = memo(() => {
  useEffect(() => {
    renderer()
  }, [])

  return <Canvas id="frame-effect" />
})

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${mediaQuery.spStyle(css`
    position: fixed;
  `)}
`

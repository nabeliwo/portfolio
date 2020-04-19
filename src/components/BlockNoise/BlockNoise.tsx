import React, { useEffect } from 'react'
import styled from 'styled-components'

import { renderer } from './canvas/renderer'

export const BlockNoise = () => {
  useEffect(() => {
    const stop = renderer()
    return () => stop()
  }, [])

  return <Canvas id="block-noise" />
}

const Canvas = styled.canvas`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

import React, { FC, memo, useEffect } from 'react'
import styled from 'styled-components'

import { renderer } from './canvas/renderer'

export const FrameEffect: FC<{ renderFlag?: boolean }> = memo(({ renderFlag = true }) => {
  useEffect(() => {
    if (renderFlag) renderer()
  }, [renderFlag])

  return <Canvas id="frame-effect" />
})

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

import React, { memo, useEffect } from 'react'
import styled, { css } from 'styled-components'

import { mediaQuery, palette, space } from '../../themes'

import { renderer } from './canvas/renderer'

export const FrameEffect = memo(() => {
  const metaTag = (typeof window !== 'undefined' ? document.querySelector('meta[name=page]') : null) as HTMLMetaElement | null
  const isNotFoundPage = !!(metaTag && metaTag.content === 'not-found')

  useEffect(() => {
    if (!isNotFoundPage) renderer()
  }, [isNotFoundPage])

  if (isNotFoundPage) return <NoEffectFrame />

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
const NoEffectFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - ${space.m * 2}px);
  height: calc(100% - ${space.m * 2}px);
  margin: ${space.m}px;
  border: 1px solid ${palette.BLUE};
  box-sizing: border-box;
  ${mediaQuery.spStyle(css`
    margin: ${space.xs}px;
    width: calc(100% - ${space.xs * 2}px);
    height: calc(100% - ${space.xs * 2}px);
    border-top: none;
    border-bottom: none;
  `)}
`

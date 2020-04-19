import React, { FC } from 'react'
import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

import { mediaQuery, palette } from '../../themes'

import { Layout } from '../Layout'
import { FrameEffect } from '../FrameEffect'

export const App: FC = ({ children }) => (
  <>
    <GlobalStyle />
    <Layout>{children}</Layout>
    <FrameEffect />
  </>
)

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'PixelMplus10-Regular';
    src: url('/font/PixelMplus10-Regular.otf') format('opentype');
  }

  html {
    height: 100%;
  }
  body {
    height: 100%;
    background-color: ${palette.BLACK};
    color: ${palette.BLUE};
    font-family: 'PixelMplus10-Regular', system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, 'メイリオ', sans-serif;
    letter-spacing: 1px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    vertical-align: middle;
  }
  input, button, textarea {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    background-color: inherit;
    color: inherit;
  }
  ${mediaQuery.pcStyle(css`
    ::-webkit-scrollbar {
      width: 15px;
      height: 15px;
      border: 1px solid ${palette.BLUE};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${palette.BLUE};
    }
  `)}
`

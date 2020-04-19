import React, { FC, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

import { font, mediaQuery, palette, space } from '../../themes'

import { SiteTitle } from '../SiteTitle'
import { Navigation } from '../Navigation'
import { BlockNoise } from '../BlockNoise'
import { path } from '../../constants/application'
import { Link } from 'gatsby'

const SHAKE_END_TIME = 2000
const SAND_STORM_START_TIME = 4000
const BLOCK_NOISE_END_TIME = 5000

export const Layout: FC = ({ children }) => {
  const pathname = typeof window !== 'undefined' ? location.pathname : ''
  const [shakeVisible, setShakeVisible] = useState(false)
  const [sandStormVisible, setSandStormVisible] = useState(false)
  const [blockNoiseVisible, setBlockNoiseVisible] = useState(false)
  const [spMenuVisible, setSpMenuVisible] = useState(false)

  const handleClickMenuButton = () => {
    setShakeVisible(true)
    setBlockNoiseVisible(true)

    setTimeout(() => {
      setSandStormVisible(true)
    }, SAND_STORM_START_TIME)

    setTimeout(() => {
      setShakeVisible(false)
      setBlockNoiseVisible(false)
      setSpMenuVisible(true)
    }, BLOCK_NOISE_END_TIME)
  }
  const handleClickCloseMenuButton = () => {
    setSandStormVisible(false)
    setSpMenuVisible(false)
  }

  return (
    <>
      <Wrapper className={shakeVisible ? 'shake' : ''}>
        <Box>
          <Header>
            <SiteTitle />
            <SpMenuButton onClick={handleClickMenuButton}>
              <span />
              <span />
              <span />
            </SpMenuButton>
          </Header>
          <Container>
            <Side>
              <Navigation />
            </Side>
            <Main>{children}</Main>
            <Bottom>
              <BottomButtons>
                <li>
                  <BottomLink to={path.root}>サイトトップへ</BottomLink>
                </li>
                <li>
                  <BottomButton
                    onClick={() => {
                      scrollTo(0, 0)
                    }}
                  >
                    ページトップへ
                  </BottomButton>
                </li>
              </BottomButtons>
              <Copy>&copy; nabeliwo.com</Copy>
            </Bottom>
          </Container>
        </Box>
      </Wrapper>

      {blockNoiseVisible && <BlockNoise />}
      {sandStormVisible && <SandStorm />}
      {spMenuVisible && (
        <SpMenu>
          <SpMenuInner>
            <SpMenuCloseButton onClick={handleClickCloseMenuButton}>
              <CloseIcon />
            </SpMenuCloseButton>
            <SpMenuList>
              <li>
                <SpMenuItem
                  to={path.root}
                  className={pathname === path.root ? 'active' : ''}
                  onClick={handleClickCloseMenuButton}
                >
                  トップ
                </SpMenuItem>
              </li>
              <li>
                <SpMenuItem
                  to={path.about}
                  className={pathname.indexOf(path.about) !== -1 ? 'active' : ''}
                  onClick={handleClickCloseMenuButton}
                >
                  アバウト
                </SpMenuItem>
              </li>
              <li>
                <SpMenuItem
                  to={path.life}
                  className={pathname.indexOf(path.life) !== -1 ? 'active' : ''}
                  onClick={handleClickCloseMenuButton}
                >
                  生活
                </SpMenuItem>
              </li>
              <li>
                <SpMenuItem
                  to={path.hobby}
                  className={pathname.indexOf(path.hobby) !== -1 ? 'active' : ''}
                  onClick={handleClickCloseMenuButton}
                >
                  趣味
                </SpMenuItem>
              </li>
              <li>
                <SpMenuItem
                  to={path.link}
                  className={pathname.indexOf(path.link) !== -1 ? 'active' : ''}
                  onClick={handleClickCloseMenuButton}
                >
                  リンク集
                </SpMenuItem>
              </li>
            </SpMenuList>
          </SpMenuInner>
        </SpMenu>
      )}
    </>
  )
}

const shake = keyframes`
  9% {
    transform: translate(0%, 0%);
  }
  10% {
    transform: translate(-2%, -2%);
  }
  12% {
    transform: translate(-2%, -2%);
  }
  13% {
    transform: translate(0%, 0%);
  }
  20% {
    transform: translate(0%, 0%);
  }
  21% {
    transform: translate(2%, 0%);
  }
  23% {
    transform: translate(2%, 0%);
  }
  24% {
    transform: translate(0%, 0%);
  }
  40% {
    transform: translate(0%, 0%);
  }
  41% {
    transform: translate(-2%, 0%);
  }
  55% {
    transform: translate(-2%, 0%);
  }
  56% {
    transform: translate(0%, 0%);
  }
  65% {
    transform: translate(0%, 0%);
  }
  66% {
    transform: translate(-2%, 2%);
  }
  68% {
    transform: translate(-2%, 2%);
  }
  69% {
    transform: translate(2%, -2%);
  }
  71% {
    transform: translate(2%, -2%);
  }
  72% {
    transform: translate(-2%, 0%);
  }
  74% {
    transform: translate(-2%, 0%);
  }
  75% {
    transform: translate(2%, 2%);
  }
  77% {
    transform: translate(2%, 2%);
  }
  78% {
    transform: translate(-2%, -2%);
  }
  80% {
    transform: translate(-2%, -2%);
  }
  81% {
    transform: translate(2%, 0%);
  }
  83% {
    transform: translate(2%, 0%);
  }
  84% {
    transform: translate(0%, 0%);
  }
  90% {
    transform: translate(0%, 0%);
  }
  91% {
    transform: translate(10%, 0%);
  }
  100% {
    transform: translate(10%, 0%);
  }
`
const blink = keyframes`
  9% {
    opacity: 1;
  }
  10% {
    opacity: 0;
  }
  11% {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  21% {
    opacity: 0.6;
  }
  30% {
    opacity: 0.6;
  }
  31% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  41% {
    opacity: 0;
  }
  42% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  61% {
    opacity: 0;
  }
  62% {
    opacity: 1;
  }
  63% {
    opacity: 0;
  }
  64% {
    opacity: 1;
  }
  65% {
    opacity: 0;
  }
  66% {
    opacity: 1;
  }
  67% {
    opacity: 0;
  }
  68% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  81% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.4;
  }
  91% {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  z-index: 10;
  position: relative;
  height: 100vh;
  padding: ${space.m}px;
  box-sizing: border-box;
  ${mediaQuery.spStyle(css`
    padding: ${space.xs}px;
  `)}

  &.shake {
    animation: ${shake} ${SHAKE_END_TIME / 1000}s forwards;
  }
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${space.m}px;
  box-sizing: border-box;
  ${mediaQuery.spStyle(css`
    padding: ${space.xs}px;
  `)}
`
const Header = styled.div`
  margin-bottom: ${space.m}px;
  ${mediaQuery.spStyle(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${space.s}px;
  `)}
`
const SpMenuButton = styled.button`
  position: relative;
  display: none;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 30px;
  ${mediaQuery.spStyle(css`
    display: flex;
  `)}

  > span {
    position: absolute;
    left: 0;
    width: 22px;
    height: 3px;
    background-color: ${palette.BLUE};

    &:nth-child(1) {
      top: 7px;
    }
    &:nth-child(2) {
      top: 14px;
    }
    &:nth-child(3) {
      top: 21px;
    }
  }
`
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
  ${mediaQuery.spStyle(css`
    display: block;
  `)}
`
const Side = styled.div`
  margin-right: ${space.m}px;
  ${mediaQuery.spStyle(css`
    display: none;
  `)}
`
const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* 40px === SiteTitle height */
  height: calc(100vh - ${space.m}px - ${space.m}px - 40px - ${space.m}px - ${space.m}px);
  ${mediaQuery.spStyle(css`
    display: block;
    height: auto;
  `)}
`
const Bottom = styled.div`
  position: relative;
  display: none;
  padding: ${space.m}px 0;

  ${mediaQuery.spStyle(css`
    display: block;
  `)}

  &::before {
    position: absolute;
    top: 0;
    left: 50%;
    width: calc(100% - ${space.xs}px);
    height: 2px;
    background-color: ${palette.BLUE};
    transform: translateX(-50%);
    content: '';
  }
`
const BottomButtons = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${space.s}px;

  > li:first-child {
    margin-right: ${space.xs}px;
  }
`
const BottomButton = styled.button`
  font-family: 'PixelMplus10-Regular';
  font-size: ${font.xs}px;
  text-decoration: underline;
`
const BottomLink = BottomButton.withComponent(Link)
const Copy = styled.p`
  font-size: ${font.m}px;
  text-align: center;
`
const SandStorm = styled.div`
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(/images/sandstorm.gif) repeat;
`
const SpMenu = styled.div`
  z-index: 30;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  animation: ${blink} 5s infinite;
`
const SpMenuCloseButton = styled.button`
  position: absolute;
  top: -60px;
  left: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${palette.BLACK};
  transform: translateX(-50%);
`
const CloseIcon = styled.div`
  position: relative;

  &::before,
  &::after {
    position: absolute;
    top: -1px;
    left: 14px;
    width: 22px;
    height: 3px;
    background-color: ${palette.BLUE};
    content: '';
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`
const SpMenuInner = styled.div`
  position: relative;
  padding: ${space.xs}px;
  background-color: ${palette.BLACK};
`
const SpMenuList = styled.ul``
const SpMenuItem = styled(Link)`
  display: flex;
  width: 200px;
  padding: ${space.xs}px;
  color: ${palette.BLUE};
  font-size: ${font.s}px;
  text-decoration: none;

  &::before {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: ${space.xs}px;
    background-color: ${palette.BLUE};
    content: '';
  }

  &.active {
    background-color: ${palette.BLUE};
    color: ${palette.BLACK};

    &::before {
      background-color: ${palette.BLACK};
    }
  }
`

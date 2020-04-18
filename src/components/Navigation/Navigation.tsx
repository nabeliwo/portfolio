import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { path } from '../../constants/application'
import { font, palette } from '../../themes'

export const Navigation = () => {
  const pathname = location.pathname

  return (
    <Wrapper>
      <ul>
        <li>
          <Item to={path.root} className={pathname === path.root ? 'active' : ''}>
            トップ
          </Item>
          <Item to={path.about} className={pathname.indexOf(path.about) !== -1 ? 'active' : ''}>
            アバウト
          </Item>
          <Item to={path.life} className={pathname.indexOf(path.life) !== -1 ? 'active' : ''}>
            生活
          </Item>
          <Item to={path.hobby} className={pathname.indexOf(path.hobby) !== -1 ? 'active' : ''}>
            趣味
          </Item>
          <Item to={path.link} className={pathname.indexOf(path.link) !== -1 ? 'active' : ''}>
            リンク集
          </Item>
        </li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  padding-left: 8px;
  border-left: 4px solid ${palette.BLUE};
`
const Item = styled(Link)`
  display: flex;
  width: 200px;
  padding: 10px;
  color: ${palette.BLUE};
  font-size: ${font.s}px;
  text-decoration: none;

  &::before {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    background-color: ${palette.BLUE};
    content: '';
  }

  &.active,
  &:hover {
    background-color: ${palette.BLUE};
    color: ${palette.BLACK};

    &::before {
      background-color: ${palette.BLACK};
    }
  }
`

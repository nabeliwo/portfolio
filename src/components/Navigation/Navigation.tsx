import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { font, palette } from '../../themes'

export const Navigation: FC<{}> = () => (
  <Wrapper>
    <ul>
      <li>
        <Item to="/">トップ</Item>
        <Item to="/about">アバウト</Item>
        <Item to="/life">生活</Item>
        <Item to="/hobby">趣味</Item>
        <Item to="/link">リンク集</Item>
      </li>
    </ul>
  </Wrapper>
)

const Wrapper = styled.nav`
  padding-left: 8px;
  border-left: 4px solid ${palette.BLUE};
`
const Item = styled(Link)`
  display: flex;
  width: 200px;
  padding: 10px;
  color: ${palette.BLUE};
  font-size: ${font.s};
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

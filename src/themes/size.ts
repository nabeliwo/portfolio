import { FlattenSimpleInterpolation } from 'styled-components'

const pcMinWidth = 890

export const mediaQuery = {
  isPc: () => innerWidth >= pcMinWidth,
  spStyle: (style: FlattenSimpleInterpolation) => `@media screen and (max-width: ${pcMinWidth}px) {${style}}`,
}

export const space = {
  m: 25,
}

export const font = {
  s: '1.6rem',
  m: '1.8rem',
}

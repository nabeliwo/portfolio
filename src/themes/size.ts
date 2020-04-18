import { FlattenSimpleInterpolation } from 'styled-components'

const pcMinWidth = 890

export const mediaQuery = {
  isPc: () => innerWidth >= pcMinWidth,
  spStyle: (style: FlattenSimpleInterpolation) => `@media screen and (max-width: ${pcMinWidth}px) {${style}}`,
}

export const space = {
  s: 20,
  m: 25,
}

export const font = {
  s: 16,
  m: 18,
  l: 20,
}

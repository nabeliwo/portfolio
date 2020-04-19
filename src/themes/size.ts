import { FlattenSimpleInterpolation } from 'styled-components'

const pcMinWidth = 890

export const mediaQuery = {
  isPc: () => innerWidth >= pcMinWidth,
  pcStyle: (style: FlattenSimpleInterpolation) => `@media screen and (min-width: ${pcMinWidth + 1}px) {${style.join('')}}`,
  spStyle: (style: FlattenSimpleInterpolation) => `@media screen and (max-width: ${pcMinWidth}px) {${style.join('')}}`,
}

export const space = {
  xs: 10,
  s: 20,
  m: 25,
}

export const font = {
  xs: 14,
  s: 16,
  m: 18,
  l: 20,
  xl: 24,
}

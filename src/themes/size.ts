import { FlattenSimpleInterpolation } from 'styled-components'

const pcMinWidth = 890

export const mediaQuery = {
  isPc: () => innerWidth >= pcMinWidth,
  spStyle: (style: FlattenSimpleInterpolation) => `@media screen and (max-width: ${pcMinWidth}px) {${style}}`,
}

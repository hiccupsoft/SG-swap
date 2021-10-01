import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Josefin Sans', sans-serif;
  }
  body {
    background: ${({ theme }) => theme.isDark ? 'url("./background_dark.jpg")' : ' url("./background_light.jpg")'};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle

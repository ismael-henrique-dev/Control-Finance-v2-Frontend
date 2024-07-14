import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string
    secundary: string
    text: string
    white: string
    primaryGray: string
    secundaryGray: string
    terciaryGray: string
    invertColor: string
  }
}

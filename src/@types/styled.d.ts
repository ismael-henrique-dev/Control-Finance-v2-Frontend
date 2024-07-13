import "styled-components"
import { darkTheme } from "../styles/themes/dark"

declare module "styled-components" {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      secundary: string
      text: string
      white: string
      primaryGray: string
      secundaryGray: string
      invertColor: string
    }
  }
}

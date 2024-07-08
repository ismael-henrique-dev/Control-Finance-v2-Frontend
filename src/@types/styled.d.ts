import "styled-components"
import { darkTheme } from "../styles/themes/dark"

declare module "styled-components" {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      secundary: string
      text: string
    }
  }
}

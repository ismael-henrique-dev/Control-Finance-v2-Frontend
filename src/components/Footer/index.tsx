import { useContext } from "react"
import { ContainerFooter } from "./styles"
import { ThemeContext } from "../../contexts/styledThemeContext"
import logoWhite from "../../assets/logo-white.svg"
import logoDark from "../../assets/logo-dark.svg"

export function Footer() {
  const themeContext = useContext(ThemeContext)
  const { theme } = themeContext

  return (
    <ContainerFooter>
      <img src={theme === "light" ? logoWhite : logoDark} />
    </ContainerFooter>
  )
}

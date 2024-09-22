import { useContext } from "react"
import { ThemeContext } from "../../../contexts/styledThemeContext"
import { ContainerSponsor } from "./styles"
import logoWhite from "../../../assets/logo-white.svg"
import logoDark from "../../../assets/logo-dark.svg"
import sponsor from "../../../assets/sponsor.svg"

export function Sponsor() {
  const themeContext = useContext(ThemeContext)
  const { theme } = themeContext

  return (
    <ContainerSponsor>
      <img
        src={theme === "light" ? logoWhite : logoDark}
        alt="logo control finance v2"
      />
      <span>Domine suas finanças com o Control Finance.</span>
      <img src={sponsor} />
      <span>
        Monitore gastos, crie orçamentos e alcance suas metas financeiras com
        facilidade.
      </span>
    </ContainerSponsor>
  )
}

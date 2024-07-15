import { ContainerSponsor } from "./styles";
import logoWhite from "../../../assets/logo-white.svg"
import sponsor from "../../../assets/sponsor.svg"

export function Sponsor() {
  return (
    <ContainerSponsor>
      <img src={logoWhite} alt="logo control finance v2" />
      <span>Domine suas finanças com o Control Finance.</span>
      <img src={sponsor} />
      <span>
        Monitore gastos, crie orçamentos e alcance suas metas financeiras com
        facilidade.
      </span>
    </ContainerSponsor>
  )
}
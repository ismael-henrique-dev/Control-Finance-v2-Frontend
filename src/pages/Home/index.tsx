import { NavLink } from "react-router-dom";
import { ContainerDefault, HomeContainer } from "./styles";
import { AccountCard } from "../../components/Cards/AccountCard";

export function Home() {
  return (
    <HomeContainer>
      <ContainerDefault></ContainerDefault>
      <ContainerDefault>
        <header>
          <strong>Contas</strong>
          <NavLink to="/contas">ver mais</NavLink>
        </header>
        <div>
          <AccountCard />
        </div>
      </ContainerDefault>
      <ContainerDefault>
        <header>
          <strong>Metas</strong>
          <NavLink to="/metas">ver mais</NavLink>
        </header>
      </ContainerDefault>
    </HomeContainer>
  )
}

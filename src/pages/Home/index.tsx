import { NavLink } from "react-router-dom";
import { ContainerDefault, HomeContainer, TopContainer } from "./styles";
import { AccountCard } from "../../components/Cards/AccountCard";
import { GoalCard } from "../../components/Cards/GoalCard";

export function Home() {

  return (
    <HomeContainer>
      <ContainerDefault></ContainerDefault>

      <ContainerDefault>
        <TopContainer>
          <strong>Contas</strong>
          <NavLink to="/contas">ver mais</NavLink>
        </TopContainer>
        <main>
          <AccountCard />
          <AccountCard />
          <AccountCard />
        </main>
      </ContainerDefault>

      <ContainerDefault>
        <TopContainer>
          <strong>Metas</strong>
          <NavLink to="/metas">ver mais</NavLink>
        </TopContainer>
        <main>
          <GoalCard />
          <GoalCard />
        </main>
      </ContainerDefault>
    </HomeContainer>
  )
}

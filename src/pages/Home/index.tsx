import { NavLink } from "react-router-dom";
import { ContainerDefault, HomeContainer, TopContainer } from "./styles";
import { AccountCard } from "../../components/Cards/AccountCard";
import { GoalCard } from "../../components/Cards/GoalCard";
import { HomeSummary, MainBalance, TypeTransaction } from "../../components/Cards/GoalCard/styles";
import { ArrowDown, ArrowUp } from "lucide-react";

export function Home() {

  return (
    <HomeContainer>
      <ContainerDefault>
        <HomeSummary>
          <MainBalance>
            <strong>R$ 400,00</strong>
            <span>Saldo atual</span>
          </MainBalance>
          <section>
            <TypeTransaction variant="income">
              <div>
                <ArrowUp />
              </div>
              <span>R$ 600,00</span>
            </TypeTransaction>

            <TypeTransaction variant="outcome">
              <div>
                <ArrowDown />
              </div>
              <span>R$ 200,00</span>
            </TypeTransaction>
          </section>
        </HomeSummary>
      </ContainerDefault>

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

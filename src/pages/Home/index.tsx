import { NavLink } from "react-router-dom"
import {
  ContainerDefault,
  EstatisticCard,
  HomeContainer,
  TopContainer,
} from "./styles"
import { AccountCard } from "../../components/Cards/AccountCard"
import { GoalCard } from "../../components/Cards/GoalCard"
import { HomeSummary, MainBalance, TypeTransaction } from "./styles"
import { ArrowDown, ArrowUp } from "lucide-react"
import { DonutChart } from "./Chart"

export function Home() {
  return (
    <HomeContainer>
      <ContainerDefault content="center">
        <EstatisticCard>
          <strong>Saldo total</strong>
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
        </EstatisticCard>
        <EstatisticCard>
          <strong>Resumo dos depósitos</strong>
          <DonutChart />
        </EstatisticCard>
        <EstatisticCard>
          <strong>Resumo dos saques</strong>
          <DonutChart />
        </EstatisticCard>
      </ContainerDefault>

      <TopContainer>
        <strong>Contas</strong>
        <NavLink to="/contas">ver mais</NavLink>
      </TopContainer>
      <ContainerDefault content="start">
        <main>
          <AccountCard />
          <AccountCard />
          <AccountCard />
        </main>
      </ContainerDefault>
      <TopContainer>
        <strong>Metas</strong>
        <NavLink to="/metas">ver mais</NavLink>
      </TopContainer>
      <ContainerDefault content="start">
        <main>
          <GoalCard />
          <GoalCard />
          {/* <GoalCard /> */}
        </main>
      </ContainerDefault>
    </HomeContainer>
  )
}

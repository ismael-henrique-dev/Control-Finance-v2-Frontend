import { NavLink } from "react-router-dom"
import {
  DefaultContainer,
  EstatisticCard,
  HomeContainer,
  TopContainer,
} from "./styles"
import { AccountCard } from "../../components/Cards/AccountCard"
import { GoalCard } from "../../components/Cards/GoalCard"
import { DonutChart } from "./Chart"
import { Summary } from "./HomeSummary"

export function Home() {
  return (
    <HomeContainer>
      <DefaultContainer content="center">
        <EstatisticCard>
          <strong>Saldo total</strong>
          <Summary />
        </EstatisticCard>
        <EstatisticCard>
          <strong>Resumo dos depósitos</strong>
          <DonutChart />
        </EstatisticCard>
        <EstatisticCard>
          <strong>Resumo dos saques</strong>
          <DonutChart />
        </EstatisticCard>
      </DefaultContainer>
      <TopContainer>
        <strong>Contas</strong>
        <NavLink to="/contas">ver mais</NavLink>
      </TopContainer>
      <DefaultContainer content="start">
        <main>
          <AccountCard isPageAccounts={false} />
          <AccountCard isPageAccounts={false} />
          <AccountCard isPageAccounts={false} />
        </main>
      </DefaultContainer>
      <TopContainer>
        <strong>Metas</strong>
        <NavLink to="/metas">ver mais</NavLink>
      </TopContainer>
      <DefaultContainer content="start">
        <main>
          <GoalCard isGoalsPage={false} />
          <GoalCard isGoalsPage={false} />
        </main>
      </DefaultContainer>
    </HomeContainer>
  )
}

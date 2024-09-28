import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AccountsContext } from "../../contexts/accountsContext"
import { AccountCard } from "../../components/Cards/AccountCard"
import { GoalCard } from "../../components/Cards/GoalCard"
import { DonutChart } from "./Chart"
import { Summary } from "./HomeSummary"
import {
  DefaultContainer,
  EstatisticCard,
  HomeContainer,
  TopContainer,
} from "./styles"

export function Home() {
  const { accountsList } = useContext(AccountsContext)

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
          {accountsList.map((account) => (
            <AccountCard
              accountTitle={account.accountTitle}
              accountId={account.AcId}
              accountType={account.Type}
              income={account.DepositValue}
              outcome={account.WithdrawValue}
              total={account.sum}
              isPageAccounts={false}
              key={account.AcId}
            />
          ))}
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

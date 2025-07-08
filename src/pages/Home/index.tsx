import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AccountsContext } from '../../contexts/Accounts/accountsContext'
import { AccountCard } from '../../components/ui/Cards/AccountCard'
import { GoalCard } from '../../components/ui/Cards/GoalCard'
import { DonutChart } from '../../components/home/Chart'
import { Summary } from '../../components/home/HomeSummary'
import { GoalsContext } from '../../contexts/Goals/goalsContext'
import { EmptyAccounts } from '../../components/ui/EmptyComponent'
import { LinearProgressCustom } from '../Accounts/styles'
import {
  DefaultContainer,
  EstatisticCard,
  HomeContainer,
  SummaryGridContainer,
  TopContainer,
} from './styles'

export function Home() {
  const { accountsList, isLoading } = useContext(AccountsContext)
  const { goalsArrayList, isLoadingGoals } = useContext(GoalsContext)

  return (
    <HomeContainer>
      <SummaryGridContainer content='center'>
        <EstatisticCard>
          <h1>Saldo total</h1>
          <Summary />
        </EstatisticCard>
        <EstatisticCard>
          <h1>Resumo dos depósitos</h1>
          <DonutChart chartType='DEP' />
        </EstatisticCard>
        <EstatisticCard>
          <h1>Resumo dos saques</h1>
          <DonutChart chartType='SAL' />
        </EstatisticCard>
      </SummaryGridContainer>
      <TopContainer>
        <h1>Contas</h1>
        {accountsList.length > 3 && <NavLink to='/contas'>ver mais</NavLink>}
      </TopContainer>
      <DefaultContainer content='start'>
        <main>
          {accountsList.length === 0 && <EmptyAccounts mensageType='conta' />}
          {isLoading ? (
            <LinearProgressCustom />
          ) : (
            accountsList
              .slice(0, 3)
              .map((account) => (
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
              ))
          )}
        </main>
      </DefaultContainer>
      <TopContainer>
        <h1>Metas</h1>
        {goalsArrayList.length > 3 && <NavLink to='/metas'>ver mais</NavLink>}
      </TopContainer>
      <DefaultContainer content='start'>
        {goalsArrayList.length === 0 && <EmptyAccounts mensageType='meta' />}
        <main>
          {isLoadingGoals ? (
            <LinearProgressCustom />
          ) : (
            goalsArrayList
              .slice(0, 3)
              .map((goal, index) => (
                <GoalCard
                  key={index}
                  title={goal.Title}
                  currentValue={goal.Value}
                  targetValue={goal.TargetedValue}
                  goalDate={goal.EndTime}
                  goalId={goal.Id}
                  isGoalsPage={false}
                />
              ))
          )}
        </main>
      </DefaultContainer>
    </HomeContainer>
  )
}

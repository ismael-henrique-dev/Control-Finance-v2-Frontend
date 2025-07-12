import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AccountsContext } from '../../contexts/Accounts/accountsContext'
import { GoalsContext } from '../../contexts/Goals/goalsContext'
import { AccountCard } from '../../components/ui/Cards/AccountCard'
import { GoalCard } from '../../components/ui/Cards/GoalCard'
import { DonutChart } from '../../components/home/Chart'
import { Summary } from '../../components/home/HomeSummary'
import { Empty } from '../../components/ui/Empty'
import { CreateAccountModal } from '../../components/ui/Modals/CreateAccountModal'
import { LinearProgressCustom } from '../Accounts/styles'
import {
  DefaultContainer,
  EstatisticCard,
  HomeContainer,
  List,
  SummaryGridContainer,
  TopContainer,
} from './styles'
import { CreateGoalModal } from '@/components/ui/Modals/CreateGoalModal'

export function Home() {
  const { accountsList, isLoading } = useContext(AccountsContext)
  const { goalsArrayList, isLoadingGoals } = useContext(GoalsContext)

  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false)
  const [isGoalModalOpen, setIsGoalModalOpen] = useState(false)

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

      {/* CONTAS */}
      <TopContainer>
        <h1>Contas</h1>
        {accountsList.length > 3 && <NavLink to='/contas'>ver mais</NavLink>}
      </TopContainer>

      <DefaultContainer content='start'>
        <main>
          {accountsList.length === 0 ? (
            <Empty
              type='account'
              title='Você não tem nenhuma conta ainda'
              description='Crie uma conta para poder organizar suas movimentações.'
              onCreateClick={() => setIsAccountModalOpen(true)}
            />
          ) : (
            <List>
              {Array.from({ length: 5 })
                .slice(0, 3)
                .map((account) => (
                  <AccountCard
                  />
                ))}
            </List>
          )}
        </main>
      </DefaultContainer>

      {/* METAS */}
      <TopContainer>
        <h1>Metas</h1>
        {goalsArrayList.length > 3 && <NavLink to='/metas'>ver mais</NavLink>}
      </TopContainer>

      <DefaultContainer content='start'>
        {goalsArrayList.length === 0 && (
          <Empty
            type='goal'
            title='Você ainda não criou nenhuma meta'
            description='Defina metas para alcançar seus objetivos financeiros com mais foco e organização.'
            onCreateClick={() => setIsGoalModalOpen(true)}
          />
        )}
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

      {/* MODAIS */}
      <CreateAccountModal
        isOpen={isAccountModalOpen}
        setIsOpen={setIsAccountModalOpen}
      />

      <CreateGoalModal
        isOpen={isGoalModalOpen}
        setIsOpen={setIsGoalModalOpen}
      />
    </HomeContainer>
  )
}

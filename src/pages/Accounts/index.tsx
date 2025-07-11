import { useContext, useState } from 'react'
import { PaginationMenu } from '../../components/form/PaginationMenu'
import { Summary } from '../../components/ui/Summary'
import { CreateAccountModal } from '../../components/ui/Modals/CreateAccountModal'
import { AccountsContext } from '../../contexts/Accounts/accountsContext'
import { Empty } from '../../components/ui/Empty'
import { useParams } from 'react-router-dom'
import {
  AccountsContainer,
  ContainerBarSummary,
  MainContainer,
  Section,
} from './styles'
import { Button } from '../../components/ui/Button'
import { Plus } from 'lucide-react'

// Accounts.tsx
export function Accounts() {
  const { accountsList, statics } = useContext(AccountsContext)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const totalPages = Math.ceil(accountsList.length / 6)
  const { id } = useParams<{ id: string }>()

  const filteredAccounts = id
    ? accountsList.filter((account) => account.AcId === id)
    : accountsList

  return (
    <AccountsContainer>
      <ContainerBarSummary>
        <Summary
          total={statics?.sum ?? 0}
          income={statics?.totalDeposit ?? 0}
          outcome={statics?.totalWithdraw ?? 0}
        />

        {/* botão de trigger do modal */}
        <CreateAccountModal
          isOpen={isCreateModalOpen}
          setIsOpen={setIsCreateModalOpen}
          trigger={
            <Button iconOnly onClick={() => setIsCreateModalOpen(true)}>
              <Plus size={24} />
            </Button>
          }
        />
      </ContainerBarSummary>

      <Section>
        <strong>Contas</strong>
        <PaginationMenu
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Section>

      <MainContainer>
        {filteredAccounts.length === 0 ? (
          <Empty
            type='account'
            title='Você não tem nenhuma conta ainda'
            description='Crie uma conta para pode organizar suas movimentações.'
            onCreateClick={() => setIsCreateModalOpen(true)}
          />
        ) : (
          filteredAccounts
            .slice((currentPage - 1) * 6, currentPage * 6)
            .map((account) => (
              // <AccountCard ... />
              <div key={account.AcId}>{account.accountTitle}</div>
            ))
        )}
      </MainContainer>
    </AccountsContainer>
  )
}

import { useContext, useState } from 'react'
import { Button } from '../../components/ui/Button'
import { PaginationMenu } from '../../components/form/PaginationMenu'
import { Summary } from '../../components/ui/Summary'
import { NewAccountModaL } from '../../components/ui/Modals/NewAccountModal'
import { AccountsContext } from '../../contexts/Accounts/accountsContext'
import { Empty } from '../../components/ui/Empty'
import { useParams } from 'react-router-dom'
import {
  AccountsContainer,
  ContainerBarSummary, MainContainer,
  Section
} from './styles'
import { Plus } from 'lucide-react'

export function Accounts() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { accountsList, statics, isLoading } = useContext(AccountsContext)

  const [currentPage, setCurrentPage] = useState<number>(1)
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
        <Button iconOnly onClick={handleOpen}>
          <Plus size={24} />
        </Button>
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
        {filteredAccounts.length === 0 && (
          <Empty
            type='account'
            title='Você não tem nenhuma conta ainda'
            description='Crie uma conta para pode organizar suas movimentações.'
          />
        )}
        {/* {isLoading === true ? (
          <LinearProgressCustom />
        ) : (
          filteredAccounts
            .slice((currentPage - 1) * 6, currentPage * 6)
            .map((account) => (
              <AccountCard
                key={account.AcId}
                isPageAccounts
                accountTitle={account.accountTitle}
                income={account.DepositValue}
                outcome={account.WithdrawValue}
                total={account.sum}
                accountId={account.AcId}
                accountType={account.Type}
              />
            ))
        )} */}
      </MainContainer>
      <NewAccountModaL open={open} handleClose={handleClose} />
    </AccountsContainer>
  )
}

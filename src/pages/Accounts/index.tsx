import { useContext, useState } from 'react'
import { PaginationMenu } from '../../components/form/PaginationMenu'
import { Summary } from '../../components/ui/Summary'
import { CreateAccountModal } from '../../components/ui/Modals/CreateAccountModal'
// import { AccountsContext } from '../../contexts/Accounts/accountsContext'
import { Empty } from '../../components/ui/Empty'
import { useSearchParams } from 'react-router-dom'
import {
  AccountsContainer,
  ContainerBarSummary,
  MainContainer,
  Section,
} from './styles'
import { Button } from '../../components/ui/Button'
import { Plus } from 'lucide-react'
import { AccountsList } from '@/components/accounts/List'
import { useQuery } from '@tanstack/react-query'
import { getAccounts } from '@/services/http/account/GetAccounts'
import { SummarySkeleton } from '@/components/ui/Skeletons/SummarySkeleton'

export function Accounts() {
  const [openModal, setOpenModal] = useState(false)
  const [searchParams, _] = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['accounts', currentPage],
    queryFn: () => getAccounts(currentPage),
  })

  const accounts: Account[] = data?.data.filteredAccounts ?? []
  const summary = data?.data.data

  const totalAccounts = data?.meta.totalCount ?? 0

  const totalPages = data?.meta.maxPage ?? 1

  const hasAccounts = totalAccounts > 0

  return (
    <AccountsContainer>
      <ContainerBarSummary>
        {summary && !isLoading && <Summary summary={summary} />}
        {isLoading && <SummarySkeleton />}

        <CreateAccountModal
          isOpen={openModal}
          setIsOpen={setOpenModal}
          trigger={
            <Button iconOnly onClick={() => setOpenModal(true)}>
              <Plus size={24} />
            </Button>
          }
        />
      </ContainerBarSummary>

      <Section>
        <strong>Contas</strong>
        <PaginationMenu totalPages={totalPages} />
      </Section>

      <MainContainer>
        {/* {hasAccounts ? ( */}
          <AccountsList
            accounts={accounts}
            isLoading={isLoading}
            isError={isError}
            errorMessage={error?.message}
          />
        {/* ) : (
          <Empty
            type='account'
            title='Você não tem nenhuma conta ainda'
            description='Crie uma conta para poder organizar suas movimentações.'
            onCreateClick={() => setOpenModal(true)}
          />
        )} */}
      </MainContainer>
    </AccountsContainer>
  )
}

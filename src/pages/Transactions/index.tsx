import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSummaryTransaction } from '../../hooks/useSummaryTransaction'
import { SelectFilter } from '../../components/form/FilterSelect'
import { Table } from './Table'
import { SearchBarTransaction } from './SearchBarTransaction'
import { TransactionsContext } from '../../contexts/Transactions/transactionsContext'
import { LinearProgressCustom } from '../Accounts/styles'
import { SelectChangeEvent } from '@mui/material'
import {
  ContainerBarSummary,
  MainContainer,
  TransactionsContainer,
} from './styles'
import { AccountsContext } from '../../contexts'

import { Plus } from 'lucide-react'
import { Button, CreateTransactionModal, Empty, Summary } from '@/components/ui'

export function Transactions() {
  const { id } = useParams<{ id: string }>()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<string>('Todas')
  const { transactions, isLoadingTransactionsList } =
    useContext(TransactionsContext)
  const { accountsList } = useContext(AccountsContext)

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const summary = useSummaryTransaction()

  const selectOptionsTransactionsFilter = [
    'Todas',
    'Maior valor',
    'Menor valor',
  ]

  const getFilteredTransactions = () => {
    const originalListTransactions = [...transactions]

    const filteredByAccount = id
      ? originalListTransactions.filter((t) => t.Id === id)
      : originalListTransactions

    if (filter === 'Maior valor') {
      const greaterValue = filteredByAccount.sort((a, b) => b.Value - a.Value)
      return greaterValue
    } else if (filter === 'Menor valor') {
      const lowestValue = filteredByAccount.sort((a, b) => a.Value - b.Value)
      return lowestValue
    } else {
      return filteredByAccount
    }
  }

  const filteredTransactions = getFilteredTransactions()

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value
    setFilter(value)
  }

  const disabledSearch = filteredTransactions.length <= 1

  return (
    <TransactionsContainer>
      <ContainerBarSummary>
        <Summary
          income={summary.income}
          outcome={summary.outcome}
          total={summary.total}
        />

        <SelectFilter
          data={selectOptionsTransactionsFilter}
          change={handleChange}
          value={filter}
        />
        <CreateTransactionModal
          isOpen={open}
          setIsOpen={handleClose}
          trigger={
            <Button iconOnly onClick={handleOpen}>
              <Plus size={24} />
            </Button>
          }
        />
      </ContainerBarSummary>
      <MainContainer>
        <strong>Histórico de transações</strong>
        {isLoadingTransactionsList ? (
          <LinearProgressCustom />
        ) : filteredTransactions.length === 0 ? (
          <Empty
            type='transaction'
            title='Você não tem nenhuma transação ainda'
            description='Caso não tenha uma conta, crie uma e adicione uma transação.'
            onCreateClick={handleOpen}
          />
        ) : (
          <>
            <SearchBarTransaction
              onSearch={setSearch}
              disabled={disabledSearch}
            />
            <Table
              searchInput={search}
              filteredTransactions={filteredTransactions}
            />
          </>
        )}
      </MainContainer>
    </TransactionsContainer>
  )
}

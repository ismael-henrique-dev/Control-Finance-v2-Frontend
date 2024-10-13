import { useContext, useState } from "react"
import { useParams } from "react-router-dom" // Adicione isso
import { NewTransactionModal } from "../../components/form/NewTransactionModal"
import { useSummaryTransaction } from "../../hooks/useSummaryTransaction"
import { SelectFilter } from "../../components/form/FilterSelect"
import { Summary } from "../../components/ui/Summary"
import { Button } from "../../components/ui/Button"
import { Table } from "./Table"
import { SearchBarTransaction } from "./SearchBarTransaction"
import { TransactionsContext } from "../../contexts/Transactions/transactionsContext"
import { LinearProgressCustom } from "../Accounts/styles"
import { EmptyAccounts } from "../../components/ui/EmptyComponent"
import { SelectChangeEvent } from "@mui/material"
import {
  ContainerBarSummary,
  MainContainer,
  TransactionsContainer,
} from "./styles"

export function Transactions() {
  const { id } = useParams<{ id: string }>() 
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<string>("Todas")
  const { transactions, isLoadingTransactionsList } =
    useContext(TransactionsContext)

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const summary = useSummaryTransaction()

  const selectOptionsTransactionsFilter = ["Todas", "Maior valor", "Menor valor"]

  const getFilteredTransactions = () => {
    const originalListTransactions = [...transactions]

    const filteredByAccount = id
      ? originalListTransactions.filter((t) => t.Id === id)
      : originalListTransactions

    if (filter === "Maior valor") {
      const greaterValue = filteredByAccount.sort((a, b) => b.Value - a.Value)
      return greaterValue
    } else if (filter === "Menor valor") {
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
        <Button handleClick={handleOpen} />
      </ContainerBarSummary>
      <MainContainer>
        <strong>Histórico de transações</strong>
        {isLoadingTransactionsList ? (
          <LinearProgressCustom />
        ) : filteredTransactions.length === 0 ? ( 
          <EmptyAccounts mensageType="transação" />
        ) : (
          <>
            <SearchBarTransaction onSearch={setSearch} disabled={disabledSearch} />
            <Table
              searchInput={search}
              filteredTransactions={filteredTransactions}
            />
          </>
        )}
      </MainContainer>
      <NewTransactionModal open={open} handleClose={handleClose} />
    </TransactionsContainer>
  )
}

import { useContext, useState } from "react"
import { useSummaryTransaction } from "../../hooks/useSummaryTransaction"
import { SelectFilter } from "../../components/FilterSelect"
import { Summary } from "../../components/Summary"
import { Button } from "../../components/Button"
import { Table } from "./Table"
import { SearchBarTransaction } from "./SearchBarTransaction"
import { NewTransactionModal } from "../../components/NewTransactionModal"
import { TransactionsContext } from "../../contexts/transactionsContext"
import { LinearProgressCustom } from "../Accounts/styles"
import { EmptyAccounts } from "../../components/EmptyComponent"
import {
  ContainerBarSummary,
  MainContainer,
  TransactionsContainer,
} from "./styles"
import { SelectChangeEvent } from "@mui/material"

export function Transactions() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<string>("Todas")
  const { transactions, isLoadingTransactionsList } =
    useContext(TransactionsContext)

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const summary = useSummaryTransaction()

  const selectOptions = ["Todas", "Maior valor", "Menor valor"]

  const getFilteredTransactions = () => {
    const originalListTransactions = [...transactions]

    if (filter === "Maior valor") {
      const greaterValue = originalListTransactions.sort((a, b) => b.Value - a.Value)
      return greaterValue
    } else if (filter === "Menor valor") {
      const lowestValue = originalListTransactions.sort((a, b) => a.Value - b.Value)
      return lowestValue
    } else {
      return originalListTransactions
    }
  }

  const filteredTransactions = getFilteredTransactions()

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value
    setFilter(value)
  }

  return (
    <TransactionsContainer>
      <ContainerBarSummary>
        <Summary
          income={summary.income}
          outcome={summary.outcome}
          total={summary.total}
        />

        <SelectFilter
          data={selectOptions}
          change={handleChange}
          value={filter}
        />
        <Button handleClick={handleOpen} />
      </ContainerBarSummary>
      <MainContainer>
        <strong>Histórico de transações</strong>
        {isLoadingTransactionsList ? (
          <LinearProgressCustom />
        ) : transactions.length === 0 ? (
          <EmptyAccounts mensageType="transação" />
        ) : (
          <>
            <SearchBarTransaction onSearch={setSearch} />
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

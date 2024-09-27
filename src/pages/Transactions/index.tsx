import { useState } from "react"
import { useSummaryTransaction } from "../../hooks/useSummaryTransaction"
import { SelectFilter } from "../../components/FilterSelect"
import { Summary } from "../../components/Summary"
import { Button } from "../../components/Button"
import { Table } from "./Table"
import { SearchBarTransaction } from "./SearchBarTransaction"
import { NewTransactionModal } from "../../components/NewTransactionModal"
import {
  ContainerBarSummary,
  MainContainer,
  TransactionsContainer,
} from "./styles"

export function Transactions() {
  const [search, setSearch] = useState("")

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const summary = useSummaryTransaction()

  return (
    <TransactionsContainer>
      <ContainerBarSummary>
        <Summary
          income={summary.income}
          outcome={summary.outcome}
          total={summary.total}
        />
        <SearchBarTransaction onSearch={setSearch} />
        <SelectFilter />
        <Button handleClick={handleOpen} />
      </ContainerBarSummary>
      <MainContainer>
        <strong>Histórico de transações</strong>
        <Table searchInput={search} />
      </MainContainer>
      <NewTransactionModal open={open} handleClose={handleClose} />
    </TransactionsContainer>
  )
}

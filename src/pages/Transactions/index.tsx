import { useState } from "react"
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
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [search, setSearch] = useState("")

  return (
    <TransactionsContainer>
      <ContainerBarSummary>
        <Summary />
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

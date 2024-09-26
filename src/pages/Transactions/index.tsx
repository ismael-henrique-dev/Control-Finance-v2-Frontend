import { SelectFilter } from "../../components/FilterSelect"
import { Summary } from "../../components/Summary"
import { Button } from "../../components/Button"
import { Table } from "./Table"
import { SearchBarTransaction } from "./SearchBarTransaction"
import {
  ContainerBarSummary,
  MainContainer,
  TransactionsContainer,
} from "./styles"
import { useState } from "react"
import { NewTransactionModal } from "../../components/NewTransactionModal"

export function Transactions() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [search, setSearch] = useState("")

  return (
    <TransactionsContainer>
      <ContainerBarSummary> {/* Analisar para ver se deve ser dividirei em um componente */}
        <Summary />
        <SearchBarTransaction onSearch={setSearch} />
        <SelectFilter />
        <Button handleClick={handleOpen} />
      </ContainerBarSummary>
      <MainContainer>
        <strong>Histórico de transações</strong>
        <Table searchInput={search} />
      </MainContainer>
      <NewTransactionModal open={open} handleClose={handleClose}/>
    </TransactionsContainer>
  )
}

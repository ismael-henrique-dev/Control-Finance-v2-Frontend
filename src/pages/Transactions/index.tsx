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

export function Transactions() {
  return (
    <TransactionsContainer>
      <ContainerBarSummary> {/* Analisar para ver se deve ser dividirei em um componente */}
        <Summary />
        <SearchBarTransaction />
        <SelectFilter />
        <Button />
      </ContainerBarSummary>
      <MainContainer>
        <strong>Histórico de transações</strong>
        <Table />
      </MainContainer>
    </TransactionsContainer>
  )
}

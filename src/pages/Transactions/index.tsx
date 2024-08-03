import { SelectFilter } from "../../components/SelectFilter"
import { Summary } from "../../components/Summary"
import { Table } from "./Table"
import { SearchBarTransaction } from "./SearchBarTransaction"
import {
  ContainerBarSummary,
  ContainerTransactions,
  MainContainer,
} from "./styles"
import { Button } from "../../components/Button"

export function Transactions() {
  return (
    <ContainerTransactions>
      <ContainerBarSummary>
        <Summary />
        <SearchBarTransaction />
        <SelectFilter />
        <Button />
      </ContainerBarSummary>
      <MainContainer>
        <strong>Histórico de transações</strong>
        <Table />
      </MainContainer>
    </ContainerTransactions>
  )
}

import { Summary } from "../../components/Summary";
import { ContainerBarSummary, ContainerTransactions, MainContainer } from "./styles";
import { Table } from "./Table";

export function Transactions() {
  return (
    <ContainerTransactions>
      <ContainerBarSummary>
        <Summary />
      </ContainerBarSummary>
      <MainContainer>
        <Table />
      </MainContainer>
    </ContainerTransactions>
  )
}

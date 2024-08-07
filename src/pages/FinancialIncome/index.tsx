import { CardStatus } from "./CardStatus";
import ColumnChart from "./Chart";
import { FinancialIncomeContainer } from "./styles";

export function FinancialIncome() {
  return (
    <FinancialIncomeContainer>
      <ColumnChart />
      <CardStatus />
    </FinancialIncomeContainer>
  )
}

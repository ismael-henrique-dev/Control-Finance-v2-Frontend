import { CardStatus } from "./CardStatus";
import ColumnChart from "./Chart";
import { CustomSelect } from "./Select";
import { FinancialIncomeContainer } from "./styles";

export function FinancialIncome() {
  return (
    <FinancialIncomeContainer>
      <section>
        <CustomSelect />
        <ColumnChart />
      </section>

      <section>
        <strong>Status</strong>
        <CardStatus />
      </section>
    </FinancialIncomeContainer>
  )
}

import { CardStatus } from "./CardStatus";
import ColumnChart from "./Chart";
import { CustomSelect } from "./Select";
import { FinancialIncomeContainer, ResponsiveContainerPage } from "./styles";

export function FinancialIncome() {
  return (
    <ResponsiveContainerPage>
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
    </ResponsiveContainerPage>
  )
}

import { Plus, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { AccountCardConatiner, AccountSummary, ButtonAdd, SummaryType } from "./styles";

export function AccountCard() {
  return (
    <AccountCardConatiner>
      <header>
        <div>
          <Wallet size={32} />
          <strong>Carteira</strong>
        </div>
        <ButtonAdd>
          <Plus />
        </ButtonAdd>
      </header>
      <strong>R$ 100,00</strong>
      <AccountSummary>
        <SummaryType variant="income">
          <div>
            <TrendingUp />
            Depositos
          </div>
          <span>R$ 200,00</span>
        </SummaryType>
        <SummaryType variant="outcome">
          <div>
            <TrendingDown />
            Saídas
          </div>
          <span>R$ 100,00</span>
        </SummaryType>
      </AccountSummary>
    </AccountCardConatiner>
  )
}
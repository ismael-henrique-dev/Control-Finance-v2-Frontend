import { ArrowDown, ArrowUp } from "lucide-react"
import { HomeSummary, MainBalance, TransactionType } from "./styles"
import { useContext } from "react"
import { AccountsContext } from "../../../contexts/accountsContext"
import { priceFormatter } from "../../../utils/formatter"

export function Summary() {
  const { statics } = useContext(AccountsContext)

  return (
    <HomeSummary>
      <MainBalance>
        <strong>{priceFormatter(statics?.sum || 0)}</strong>
        <span>Saldo atual</span>
      </MainBalance>
      <section>
        <TransactionType variant="income">
          <div>
            <ArrowUp />
          </div>
          <span>{priceFormatter(statics?.totalDeposit || 0)}</span>
        </TransactionType>
        <TransactionType variant="outcome">
          <div>
            <ArrowDown />
          </div>
          <span>{priceFormatter(statics?.totalWithdraw || 0)}</span>
        </TransactionType>
      </section>
    </HomeSummary>
  )
}

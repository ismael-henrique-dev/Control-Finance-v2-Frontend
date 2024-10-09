import { ArrowDown, ArrowUp } from "lucide-react"
import { HomeSummary, MainBalance, TransactionType } from "./styles"
import { useFormatterCoin } from "../../../hooks/useFormatterCoin"
import { useContext } from "react"
import { AccountsContext } from "../../../contexts/accountsContext"

export function Summary() {
  const formatter = useFormatterCoin
  const { statics } = useContext(AccountsContext)

  return (
    <HomeSummary>
      <MainBalance>
        <strong>{formatter(statics?.sum || 0)}</strong>
        <span>Saldo atual</span>
      </MainBalance>
      <section>
        <TransactionType variant="income">
          <div>
            <ArrowUp />
          </div>
          <span>{formatter(statics?.totalDeposit || 0)}</span>
        </TransactionType>
        <TransactionType variant="outcome">
          <div>
            <ArrowDown />
          </div>
          <span>{formatter(statics?.totalWithdraw || 0)}</span>
        </TransactionType>
      </section>
    </HomeSummary>
  )
}

import { ArrowDown, ArrowUp } from "lucide-react"
import { HomeSummary, MainBalance, TransactionType } from "./styles"
import { useSummaryMain } from "../../../hooks/useSummaryMain"
import { useFormatterCoin } from "../../../hooks/useFormatterCoin"

export function Summary() {
  const summary = useSummaryMain()
  const formatter = useFormatterCoin

  return (
    <HomeSummary>
      <MainBalance>
        <strong>{formatter(summary.total)}</strong>
        <span>Saldo atual</span>
      </MainBalance>
      <section>
        <TransactionType variant="income">
          <div>
            <ArrowUp />
          </div>
          <span>{formatter(summary.income)}</span>
        </TransactionType>
        <TransactionType variant="outcome">
          <div>
            <ArrowDown />
          </div>
          <span>{formatter(summary.outcome)}</span>
        </TransactionType>
      </section>
    </HomeSummary>
  )
}

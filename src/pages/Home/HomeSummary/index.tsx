import { ArrowDown, ArrowUp } from "lucide-react"
import { HomeSummary, MainBalance, TransactionType } from "./styles"

export function Summary() {
  return (
    <HomeSummary>
      <MainBalance>
        <strong>R$ 400,00</strong>
        <span>Saldo atual</span>
      </MainBalance>
      <section>
        <TransactionType variant="income">
          <div>
            <ArrowUp />
          </div>
          <span>R$ 600,00</span>
        </TransactionType>
        <TransactionType variant="outcome">
          <div>
            <ArrowDown />
          </div>
          <span>R$ 200,00</span>
        </TransactionType>
      </section>
    </HomeSummary>
  )
}

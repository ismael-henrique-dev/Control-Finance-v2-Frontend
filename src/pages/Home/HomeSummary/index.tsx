import { ArrowDown, ArrowUp } from "lucide-react"
import { HomeSummary, MainBalance, TypeTransaction } from "./styles"

export function Summary() {
  return (
    <HomeSummary>
      <MainBalance>
        <strong>R$ 400,00</strong>
        <span>Saldo atual</span>
      </MainBalance>
      <section>
        <TypeTransaction variant="income">
          <div>
            <ArrowUp />
          </div>
          <span>R$ 600,00</span>
        </TypeTransaction>
        <TypeTransaction variant="outcome">
          <div>
            <ArrowDown />
          </div>
          <span>R$ 200,00</span>
        </TypeTransaction>
      </section>
    </HomeSummary>
  )
}

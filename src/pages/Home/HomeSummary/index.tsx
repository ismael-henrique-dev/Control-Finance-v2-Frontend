import { ArrowDown, ArrowUp } from "lucide-react"
import { HomeSummary, MainBalance, TransactionType } from "./styles"
// import { useSummaryTransaction } from "../../../hooks/useSummaryTransaction"
// import { useContext } from "react"
// import { AccountsContext } from "../../../contexts/accountsContext"

export function Summary() {
  // const { statics } = useContext(AccountsContext)
  // const summaryTransactions = useSummaryTransaction()
  // const summaryGoals = useSummaryTransaction()

  // const accountTotal = 0
  // const accountIncome = 0
  // const accountOutcome = 0


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

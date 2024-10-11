import { ArrowDown, ArrowUp, DollarSign } from "lucide-react"
import { ContainerSummary, TransactionType } from "./styles"
import { priceFormatter } from "../../../utils/formatter"

interface SummaryProps {
  type?: "goal"
  total: number
  income: number
  outcome: number
}

export function Summary({ total, income, outcome, type }: SummaryProps) {

  return (
    <ContainerSummary>
      <TransactionType variant="total">
        <div>
          <DollarSign />
        </div>
        <span>{priceFormatter(total)}</span>
      </TransactionType>
      <TransactionType variant="income">
        <div>
          <ArrowUp />
        </div>
        <span>{priceFormatter(income)}</span>
      </TransactionType>
      {type !== "goal" && (
        <TransactionType variant="outcome">
          <div>
            <ArrowDown />
          </div>
          <span>{priceFormatter(outcome)}</span>
        </TransactionType>
      )}
    </ContainerSummary>
  )
}

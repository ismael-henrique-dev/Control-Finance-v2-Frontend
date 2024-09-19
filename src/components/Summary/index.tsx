import { ArrowDown, ArrowUp, DollarSign } from "lucide-react"
import { ContainerSummary, TransactionType } from "./styles"
import { useFormatterCoin } from "../../hooks/useFormatterCoin"

interface SummaryProps {
  total: number
  income: number
  outcome: number
}

export function Summary({ total, income, outcome }: SummaryProps) {
  const formatCurrency = useFormatterCoin

  return (
    <ContainerSummary>
      <TransactionType variant="total">
        <div>
          <DollarSign />
        </div>
        <span>{formatCurrency(total)}</span>
      </TransactionType>
      <TransactionType variant="income">
        <div>
          <ArrowUp />
        </div>
        <span>{formatCurrency(income)}</span>
      </TransactionType>
      <TransactionType variant="outcome">
        <div>
          <ArrowDown />
        </div>
        <span>{formatCurrency(outcome)}</span>
      </TransactionType>
    </ContainerSummary>
  )
}

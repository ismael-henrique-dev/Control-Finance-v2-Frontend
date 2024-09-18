import { ArrowDown, ArrowUp, DollarSign } from "lucide-react"
import { ContainerSummary, TransactionType } from "./styles"

interface SummaryProps {
  total: number
  income: number
  outcome: number
}

// transformar em um hook
export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

export function Summary({ total, income, outcome }: SummaryProps) {
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

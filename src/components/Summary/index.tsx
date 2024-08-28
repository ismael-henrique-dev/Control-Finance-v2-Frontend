import { ArrowDown, ArrowUp, DollarSign } from "lucide-react"
import { ContainerSummary, TransactionType } from "./styles"

interface SummaryProps {
  total: number
  income: number
  outcome: number
}

export function Summary({total, income, outcome}:SummaryProps) {
  return (
    <ContainerSummary>
      <TransactionType variant="total">
        <div>
          <DollarSign />
        </div>
        <span>R$ {total}</span>
      </TransactionType>
      <TransactionType variant="income"> 
        <div>
          <ArrowUp />
        </div>
        <span>R$ {income}</span>
      </TransactionType>
      <TransactionType variant="outcome">
        <div>
          <ArrowDown />
        </div>
        <span>R$ {outcome}</span>
      </TransactionType>
    </ContainerSummary>
  )
}

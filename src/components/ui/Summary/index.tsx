import { ArrowDown, ArrowUp, DollarSign } from 'lucide-react'
import { ContainerSummary, TransactionType } from './styles'
import { priceFormatter } from '@/utils/PriceFormatter'

type SummaryProps = {
  type?: 'goal'
  summary: {
    value: number
    income: number
    outcome: number
  }
}

export function Summary({ summary, type }: SummaryProps) {
  return (
    <ContainerSummary>
      <TransactionType variant='total'>
        <div>
          <DollarSign />
        </div>
        <span>{priceFormatter(summary.value)}</span>
      </TransactionType>
      <TransactionType variant='income'>
        <div>
          <ArrowUp />
        </div>
        <span>{priceFormatter(summary.income)}</span>
      </TransactionType>
      {type !== 'goal' && (
        <TransactionType variant='outcome'>
          <div>
            <ArrowDown />
          </div>
          <span>{priceFormatter(summary.outcome)}</span>
        </TransactionType>
      )}
    </ContainerSummary>
  )
}

import { ArrowDown, ArrowUp, DollarSign } from "lucide-react"
import { ContainerSummary, TransactionType } from "./styles"

export function Summary() {
  return (
    <ContainerSummary>
      <TransactionType variant="total">
        <div>
          <DollarSign />
        </div>
        <span>R$ 400,00</span>
      </TransactionType>
      <TransactionType variant="income"> 
        <div>
          <ArrowUp />
        </div>
        <span>R$ 400,00</span>
      </TransactionType>
      <TransactionType variant="outcome">
        <div>
          <ArrowDown />
        </div>
        <span>R$ 400,00</span>
      </TransactionType>
    </ContainerSummary>
  )
}

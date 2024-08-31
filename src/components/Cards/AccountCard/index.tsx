import { Plus, TrendingDown, TrendingUp, Wallet } from "lucide-react"
import {
  AccountCardConatiner,
  AccountSummary,
  ActionsArea,
  ButtonAdd,
  SummaryType,
} from "./styles"
import { NewTransactionModal } from "../../NewTransactionModal"
import { useState } from "react"
import { PopeoverOptionsAccount } from "./PoperOptionsAccount"

interface AccountCardProps {
  isPageAccounts: boolean
  accountTitle: string
  accountType?: "Carteira"
  income: number
  outcome: number
  total: number
  accountId: string
}

export function AccountCard({ isPageAccounts, accountTitle, total, income, outcome, accountId}: AccountCardProps) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  
  return (
    <AccountCardConatiner>
      <header>
        <div>
          <Wallet size={32} />
          <strong>{accountTitle}</strong>
        </div>
        <ActionsArea>
          {isPageAccounts && (
            <PopeoverOptionsAccount accountId={accountId}/>
          )}
          <ButtonAdd onClick={handleOpen}>
            <Plus />
          </ButtonAdd>
        </ActionsArea>
      </header>
      <strong>R$ {total}</strong>
      <AccountSummary>
        <SummaryType variant="income">
          <div>
            <TrendingUp />
            Depositos
          </div>
          <span>R$ {income}</span>
        </SummaryType>
        <SummaryType variant="outcome">
          <div>
            <TrendingDown />
            Saídas
          </div>
          <span>R$ {outcome}</span>
        </SummaryType>
      </AccountSummary>
      <NewTransactionModal open={open} handleClose={handleClose}/>
    </AccountCardConatiner>
  )
}

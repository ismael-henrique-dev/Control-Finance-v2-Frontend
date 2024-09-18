import { Coins, Handshake, Landmark, Plus, TrendingDown, TrendingUp, Wallet } from "lucide-react"
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
import { formatCurrency } from "../../Summary"

interface AccountCardProps {
  isPageAccounts: boolean
  accountTitle: string
  accountType: string// "Carteira" | "ContaBancaria" | "CorretoraDeInvestimentos" | "Poupanca"
  income: number
  outcome: number
  total: number
  accountId: string
}

export function AccountCard({
  isPageAccounts,
  accountTitle,
  total,
  income,
  outcome,
  accountId,
  accountType
}: AccountCardProps) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <AccountCardConatiner>
      <header>
        <div>
          {accountType === "Carteira" && <Wallet size={32} />}
          {accountType === "ContaBancaria" && <Landmark size={32} />}
          {accountType === "CorretoraDeInvestimentos" && (
            <Handshake size={32} />
          )}
          {accountType === "Poupanca" && <Coins size={32} />}
          <strong>{accountTitle}</strong>
        </div>
        <ActionsArea>
          {isPageAccounts && <PopeoverOptionsAccount accountId={accountId} />}
          <ButtonAdd onClick={handleOpen}>
            <Plus />
          </ButtonAdd>
        </ActionsArea>
      </header>
      <strong>{formatCurrency(total)}</strong>
      <AccountSummary>
        <SummaryType variant="income">
          <div>
            <TrendingUp />
            Depositos
          </div>
          <span>{formatCurrency(income)}</span>
        </SummaryType>
        <SummaryType variant="outcome">
          <div>
            <TrendingDown />
            Saídas
          </div>
          <span>{formatCurrency(outcome )}</span>
        </SummaryType>
      </AccountSummary>
      <NewTransactionModal open={open} handleClose={handleClose} />
    </AccountCardConatiner>
  )
}

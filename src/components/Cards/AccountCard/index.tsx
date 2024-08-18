import { Plus, Settings2, TrendingDown, TrendingUp, Wallet } from "lucide-react"
import {
  AccountCardConatiner,
  AccountSummary,
  ActionsArea,
  ButtonAdd,
  SummaryType,
} from "./styles"
import { NewTransactionModal } from "../../NewTransactionModal"
import { useState } from "react"

interface AccountCardProps {
  isPageAccounts: boolean
}

export function AccountCard({ isPageAccounts }: AccountCardProps) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  
  return (
    <AccountCardConatiner>
      <header>
        <div>
          <Wallet size={32} />
          <strong>Carteira</strong>
        </div>
        <ActionsArea>
          {isPageAccounts && (
            <ButtonAdd>
              <Settings2 />
            </ButtonAdd>
          )}
          <ButtonAdd onClick={handleOpen}>
            <Plus />
          </ButtonAdd>
        </ActionsArea>
      </header>
      <strong>R$ 100,00</strong>
      <AccountSummary>
        <SummaryType variant="income">
          <div>
            <TrendingUp />
            Depositos
          </div>
          <span>R$ 200,00</span>
        </SummaryType>
        <SummaryType variant="outcome">
          <div>
            <TrendingDown />
            Saídas
          </div>
          <span>R$ 100,00</span>
        </SummaryType>
      </AccountSummary>
      <NewTransactionModal open={open} handleClose={handleClose}/>
    </AccountCardConatiner>
  )
}

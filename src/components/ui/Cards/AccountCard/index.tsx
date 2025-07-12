import { useState } from 'react'
import { PopeoverOptionsAccount } from './PopoverOptionsAccount'
import {
  Coins,
  Handshake,
  Landmark,
  Plus,
  TrendingDown,
  TrendingUp,
  Wallet,
} from 'lucide-react'
import {
  AccountCardConatiner,
  AccountSummary,
  ActionsArea,
  ButtonAdd,
  SummaryType,
} from './styles'

import { priceFormatter } from '../../../../utils/formatter'


// interface AccountCardProps {
//   isPageAccounts: boolean
//   accountTitle: string
//   accountType: string
//   income: number
//   outcome: number
//   total: number
//   accountId: string
// }

export function AccountCard() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const iconMap: Record<string, JSX.Element> = {
    Carteira: <Wallet size={32} />,
    ContaBancaria: <Landmark size={32} />,
    CorretoraDeInvestimentos: <Handshake size={32} />,
    Poupanca: <Coins size={32} />,
  }

  return (
    <AccountCardConatiner>
      <header>
        <div>
          {iconMap['Poupanca'] || <Wallet size={32} />}
          <strong>{'asasa'}</strong>
        </div>
        <ActionsArea>
          {/* {isPageAccounts && <PopeoverOptionsAccount accountId={accountId} />} */}
          <ButtonAdd onClick={handleOpen}>
            <Plus />
          </ButtonAdd>
        </ActionsArea>
      </header>
      <strong>{priceFormatter(23.2)}</strong>
      <AccountSummary>
        <SummaryType variant='income'>
          <div>
            <TrendingUp />
            Depositos
          </div>
          <span>{priceFormatter(1.23)}</span>
        </SummaryType>
        <SummaryType variant='outcome'>
          <div>
            <TrendingDown />
            Saídas
          </div>
          <span>{priceFormatter(122)}</span>
        </SummaryType>
      </AccountSummary>
    </AccountCardConatiner>
  )
}

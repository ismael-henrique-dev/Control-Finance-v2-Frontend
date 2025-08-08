import { useState } from 'react'
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
  AccountCardContainer,
  AccountSummary,
  ActionsArea,
  ButtonAdd,
  SummaryType,
} from './styles'
import { priceFormatter } from '@/utils/PriceFormatter'
import { AccountOptionsPopover } from './AccountOptions'

type AccountCardProps = Omit<Account, 'userId' | 'description'>

export function AccountCard(props: AccountCardProps) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const iconMap: Record<string, JSX.Element> = {
    carteira: <Wallet size={32} />,
    contaBancaria: <Landmark size={32} />,
    corretoraDeInvestimentos: <Handshake size={32} />,
    poupanca: <Coins size={32} />,
  }

  const income = priceFormatter(props.resume.income)
  const outcome = priceFormatter(props.resume.outcome)
  const total = priceFormatter(props.value)

  return (
    <AccountCardContainer>
      <header>
        <div>
          {iconMap[props.type] || <Wallet size={32} />}
          <strong>{props.title}</strong>
        </div>
        <ActionsArea>
          <AccountOptionsPopover accountId={props.id} />
          <ButtonAdd onClick={handleOpen}>
            <Plus />
          </ButtonAdd>
        </ActionsArea>
      </header>
      <strong>{total}</strong>
      <AccountSummary>
        <SummaryType variant='income'>
          <div>
            <TrendingUp />
            Depósitos
          </div>
          <span>{income}</span>
        </SummaryType>
        <SummaryType variant='outcome'>
          <div>
            <TrendingDown />
            Saídas
          </div>
          <span>{outcome}</span>
        </SummaryType>
      </AccountSummary>
    </AccountCardContainer>
  )
}

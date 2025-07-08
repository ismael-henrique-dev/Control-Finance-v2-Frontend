import { ArrowDown, ArrowUp, DollarSign } from 'lucide-react'
import { HomeSummary, TransactionType } from './styles'
import { useContext } from 'react'
import { AccountsContext } from '../../../contexts/Accounts/accountsContext'
import { priceFormatter } from '../../../utils/formatter'

export function Summary() {
  const { statics } = useContext(AccountsContext)

  return (
    <HomeSummary>
      <section>
        <TransactionType variant='total'>
          <div>
            <DollarSign />
          </div>
          <span>{priceFormatter(statics?.sum || 0)}</span>
        </TransactionType>
        <TransactionType variant='income'>
          <div>
            <ArrowUp />
          </div>
          <span>{priceFormatter(statics?.totalDeposit || 0)}</span>
        </TransactionType>
        <TransactionType variant='outcome'>
          <div>
            <ArrowDown />
          </div>
          <span>{priceFormatter(statics?.totalWithdraw || 0)}</span>
        </TransactionType>
      </section>
    </HomeSummary>
  )
}

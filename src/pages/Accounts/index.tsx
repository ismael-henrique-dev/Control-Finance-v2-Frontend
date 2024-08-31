import { useContext, useState } from "react"
import { Button } from "../../components/Button"
import { AccountCard } from "../../components/Cards/AccountCard"
import { PaginationMenu } from "../../components/PaginationMenu"
import { Summary } from "../../components/Summary"
import { NewAccountModaL } from "./NewAccountModal"
import {
  AccountsContainer,
  ContainerBarSummary,
  MainContainer,
  Section,
} from "./styles"
import { AccountsContext } from "../../contexts/accountsContext"

export function Accounts() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { accountsList, statics } = useContext(AccountsContext)

  return (
    <AccountsContainer>
      <ContainerBarSummary>
        <Summary
          total={statics?.sum ?? 0}
          income={statics?.totalDeposit ?? 0}
          outcome={statics?.totalWithdraw ?? 0}
        />
        <Button handleClick={handleOpen} />
      </ContainerBarSummary>
      <Section>
        <strong>Contas</strong>
        <PaginationMenu />
      </Section>
      <MainContainer>
        {accountsList?.AccountStatics.map((account) => (
          <AccountCard
            key={account.accountId}
            isPageAccounts
            accountTitle={account.accountTitle}
            income={account.DepositValue}
            outcome={account.WithdrawValue}
            total={account.sum}
            accountId={account.accountId} // Agora usando o accountId
          />
        ))}
      </MainContainer>
      <NewAccountModaL open={open} handleClose={handleClose} />
    </AccountsContainer>
  )
}

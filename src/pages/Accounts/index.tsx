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

interface Account {
  isPageAccounts: boolean
  accountTitle: string
  accountType?: "Carteira"
  income: number
  outcome: number
  total: number
}

export function Accounts() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { accountsList } = useContext(AccountsContext)

  return (
    <AccountsContainer>
      <ContainerBarSummary>
        <Summary />
        <Button handleClick={handleOpen} />
      </ContainerBarSummary>
      <Section>
        <strong>Contas</strong>
        <PaginationMenu />
      </Section>
      <MainContainer>
        {accountsList.map((account) => {
          return (
            <AccountCard
              isPageAccounts
              accountTitle={account.accountTitle}
              income={account.income}
              outcome={account.outcome}
              total={account.sum}
            />
          )
        })}
      </MainContainer>
      <NewAccountModaL open={open} handleClose={handleClose} />
    </AccountsContainer>
  )
}

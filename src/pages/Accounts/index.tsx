import { useState } from "react"
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

export function Accounts() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <AccountsContainer>
      <ContainerBarSummary>
        <Summary />
        <Button handleClick={handleOpen}/>
      </ContainerBarSummary>
      <Section>
        <strong>Contas</strong>
        <PaginationMenu />
      </Section>
      <MainContainer>
        <AccountCard isPageAccounts />
        <AccountCard isPageAccounts />
        <AccountCard isPageAccounts />
        <AccountCard isPageAccounts />
      </MainContainer>
      <NewAccountModaL open={open} handleClose={handleClose} />
    </AccountsContainer>
  )
}

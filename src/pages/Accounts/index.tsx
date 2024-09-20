import { useContext, useState } from "react"
import { Button } from "../../components/Button"
import { AccountCard } from "../../components/Cards/AccountCard"
import { PaginationMenu } from "../../components/PaginationMenu"
import { Summary } from "../../components/Summary/"
import { NewAccountModaL } from "./NewAccountModal"
import { AccountsContext } from "../../contexts/accountsContext"
import {
  AccountsContainer,
  ContainerBarSummary,
  LinearProgressCustom,
  MainContainer,
  Section,
} from "./styles"

export function Accounts() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { accountsList, statics, isLoading } = useContext(AccountsContext)

  const [currentPage, setCurrentPage] = useState<number>(1)
  const totalPages = Math.ceil(accountsList.length / 6)

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
        <PaginationMenu
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Section>
      <MainContainer>
        {isLoading === true ? (
          <LinearProgressCustom />
        ) : (
          accountsList
            .slice((currentPage - 1) * 6, currentPage * 6)
            .map((account) => (
              <AccountCard
                key={account.AcId}
                isPageAccounts
                accountTitle={account.accountTitle}
                income={account.DepositValue}
                outcome={account.WithdrawValue}
                total={account.sum}
                accountId={account.AcId}
                accountType={account.Type}
              />
            ))
        )}
      </MainContainer>
      <NewAccountModaL open={open} handleClose={handleClose} />
    </AccountsContainer>
  )
}

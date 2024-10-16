import { useContext, useState } from "react"
import { Button } from "../../components/ui/Button"
import { AccountCard } from "../../components/ui/Cards/AccountCard"
import { PaginationMenu } from "../../components/form/PaginationMenu"
import { Summary } from "../../components/ui/Summary"
import { NewAccountModaL } from "./NewAccountModal"
import { AccountsContext } from "../../contexts/Accounts/accountsContext"
import { EmptyAccounts } from "../../components/ui/EmptyComponent"
import { useParams } from "react-router-dom"
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

  const { id } = useParams<{ id: string }>()

  const filteredAccounts = id
    ? accountsList.filter((account) => account.AcId === id)
    : accountsList

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
        {filteredAccounts.length === 0 && <EmptyAccounts mensageType="conta" />}
        {isLoading === true ? (
          <LinearProgressCustom />
        ) : (
          filteredAccounts
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

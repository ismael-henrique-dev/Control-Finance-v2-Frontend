import { Button } from "../../components/Button";
import { AccountCard } from "../../components/Cards/AccountCard";
import { PaginationMenu } from "../../components/PaginationMenu";
import { Summary } from "../../components/Summary";
import { AccountsContainer, ContainerBarSummary, MainContainer, Section } from "./styles";

export function Accounts() {
  return (
    <AccountsContainer>
      <ContainerBarSummary>
        <Summary />
        <Button />
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
    </AccountsContainer>
  );
}

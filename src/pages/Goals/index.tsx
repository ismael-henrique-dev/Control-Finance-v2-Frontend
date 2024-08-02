import { Button } from "../../components/Button";
import { GoalCard } from "../../components/Cards/GoalCard";
import { PaginationMenu } from "../../components/PaginationMenu";
import { SelectFilter } from "../../components/SelectFilter";
import { Summary } from "../../components/Summary";

import { ContainerBarSummary, ContainerGoals, MainContainer, Section } from "./styles";

export function Goals() {
  return (
    <ContainerGoals>
      <ContainerBarSummary>
        <Summary />
        <SelectFilter />
        <Button />
      </ContainerBarSummary>
      <Section>
        <strong>Metas</strong>
        <PaginationMenu />
      </Section>
      <MainContainer>
        <GoalCard isGoalsPage={true} />
        <GoalCard isGoalsPage={true} />
        <GoalCard isGoalsPage={true} />
      </MainContainer>
    </ContainerGoals>
  );
}

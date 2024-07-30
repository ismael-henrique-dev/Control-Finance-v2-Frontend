import { GoalCard } from "../../components/Cards/GoalCard";
import { Summary } from "../../components/Summary";

import { ContainerBarSummary, ContainerGoals, MainContainer } from "./styles";

export function Goals() {
  return (
    <ContainerGoals>
      <ContainerBarSummary>
        <Summary />
      </ContainerBarSummary>
      <MainContainer>
        <GoalCard isGoalsPage={true} />
        <GoalCard isGoalsPage={true} />
        <GoalCard isGoalsPage={true} />
      </MainContainer>
    </ContainerGoals>
  );
}

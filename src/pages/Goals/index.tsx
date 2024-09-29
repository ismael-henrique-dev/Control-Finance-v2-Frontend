import { Button } from "../../components/Button"
import { GoalCard } from "../../components/Cards/GoalCard"
import { PaginationMenu } from "../../components/PaginationMenu"
import { SelectFilter } from "../../components/FilterSelect"
import { Summary } from "../../components/Summary"
import { GoalModal } from "./NewGoalModal"
import { useContext, useState } from "react"
import { GoalsContext } from "../../contexts/goalsContext"
import {
  ContainerBarSummary,
  GoalsContainer,
  MainContainer,
  Section,
} from "./styles"
import { useSummaryGoals } from "../../hooks/useSummaryGoal"

export function Goals() {
  const { goalsList } = useContext(GoalsContext)

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const selectOptions = ["Todos", "Em andamento", "Concluído"]

  const [currentPage, setCurrentPage] = useState<number>(1)
  const totalPages = Math.ceil(goalsList.length / 6)

  const summary = useSummaryGoals()

  return (
    <GoalsContainer>
      <ContainerBarSummary>
        <Summary
          type="goal"
          outcome={summary.outcome}
          income={summary.income}
          total={summary.total}
        />
        <SelectFilter data={selectOptions} />
        <Button handleClick={handleOpen} />
      </ContainerBarSummary>
      <Section>
        <strong>Metas</strong>
        <PaginationMenu
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Section>
      <MainContainer>
        {goalsList.slice((currentPage - 1) * 6, currentPage * 6).map(
          (goal, index) => (
            <GoalCard
              key={index}
              title={goal.Title}
              currentValue={goal.Value}
              targetValue={goal.TargetedValue}
              goalDate={goal.EndTime}
              goalId={goal.Id}
              isGoalsPage={true}
            />
          )
        )}
      </MainContainer>
      <GoalModal open={open} handleClose={handleClose} />
    </GoalsContainer>
  )
}

import { Button } from "../../components/ui/Button"
import { PaginationMenu } from "../../components/form/PaginationMenu"
import { SelectFilter } from "../../components/form/FilterSelect"
import { Summary } from "../../components/ui/Summary"
import { GoalModal } from "./NewGoalModal"
import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { GoalsContext } from "../../contexts/Goals/goalsContext"
import { useSummaryGoals } from "../../hooks/useSummaryGoal"
import { LinearProgressCustom } from "../Accounts/styles"
import { EmptyAccounts } from "../../components/ui/EmptyComponent"
import { SelectChangeEvent } from "@mui/material"
import { GoalCard } from "../../components/ui/Cards/GoalCard"
import {
  ContainerBarSummary,
  GoalsContainer,
  MainContainer,
  Section,
} from "./styles"

export function Goals() {
  const { goalsList, goalsArrayList, isLoadingGoals } = useContext(GoalsContext)

  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState<string>("Todos")
  const [currentPage, setCurrentPage] = useState<number>(1)

  const { id } = useParams<{ id: string }>()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const selectOptions = ["Todos", "Em andamento", "Concluído"]

  const filteredGoalsById = id
    ? goalsArrayList.filter((goal) => goal.Id === id)
    : goalsArrayList

  const getFilteredGoals = () => {
    if (filter === "Em andamento") {
      return goalsList.unCompletedGoals
    } else if (filter === "Concluído") {
      return goalsList.CompletedGoals
    } else {
      return filteredGoalsById
    }
  }

  const filteredGoals = getFilteredGoals()
  const totalPages = Math.ceil(filteredGoals.length / 6)

  const summary = useSummaryGoals({ goalsList: filteredGoals })

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value
    setFilter(value)
  }

  return (
    <GoalsContainer>
      <ContainerBarSummary>
        <Summary
          type="goal"
          outcome={summary.outcome}
          income={summary.income}
          total={summary.total}
        />
        <SelectFilter
          data={selectOptions}
          change={handleChange}
          value={filter}
        />
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
        {isLoadingGoals ? (
          <LinearProgressCustom />
        ) : filteredGoals.length === 0 ? (
          <EmptyAccounts mensageType="meta" />
        ) : (
          filteredGoals
            .slice((currentPage - 1) * 6, currentPage * 6)
            .map((goal) => {
              return (
                <GoalCard
                  key={goal.Id}
                  title={goal.Title}
                  currentValue={goal.Value}
                  targetValue={goal.TargetedValue}
                  goalDate={goal.EndTime}
                  goalId={goal.Id}
                  isGoalsPage={true}
                />
              )
            })
        )}
      </MainContainer>
      <GoalModal open={open} handleClose={handleClose} />
    </GoalsContainer>
  )
}

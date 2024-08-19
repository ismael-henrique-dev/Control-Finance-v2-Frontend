import { Button } from "../../components/Button"
import { GoalCard } from "../../components/Cards/GoalCard"
import { PaginationMenu } from "../../components/PaginationMenu"
import { SelectFilter } from "../../components/FilterSelect"
import { Summary } from "../../components/Summary"
import {
  ContainerBarSummary,
  GoalsContainer,
  MainContainer,
  Section,
} from "./styles"
import { GoalModal } from "./NewGoalModal"
import { useState } from "react"

export function Goals() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const selectOptions = ['Todos', 'Em andamento', 'Concluído']
  
  return (
    <GoalsContainer>
      <ContainerBarSummary>
        <Summary />
        <SelectFilter data={selectOptions} />
        <Button handleClick={handleOpen}/>
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
      <GoalModal open={open} handleClose={handleClose} />
    </GoalsContainer>
  )
}

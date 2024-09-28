import { useState } from "react"
import { CircleDollarSign } from "lucide-react"
import { useFormatterCoin } from "../../../hooks/useFormatterCoin"
import { MoreGoalOption } from "./SpeedDial"
import { BarLinearProgress, ContainerCard } from "./styles"
import dayjs from "dayjs"

export interface GoalCardProps {
  isGoalsPage: boolean
  goalId: string
  goalDate: string
  currentValue: number
  targetValue: number
  title: string
}

export function GoalCard({
  isGoalsPage,
  title,
  currentValue,
  targetValue,
  goalDate,
  goalId,
}: GoalCardProps) {
  const [progress, setProgress] = useState(75) // na real progress virá do backend
  const formatter = useFormatterCoin

  return (
    <ContainerCard>
      <header>
        <div>
          <CircleDollarSign size={32} />
          <strong>{title}</strong>
        </div>
        <button>
          <MoreGoalOption isGoalsPage={isGoalsPage} goalId={goalId} />
        </button>
      </header>
      <span>Vencimento: {dayjs(goalDate).format("DD/MM/YYYY")}</span>
      <section>
        <strong>
          {formatter(currentValue)} de {formatter(targetValue)}
        </strong>
        <BarLinearProgress variant="determinate" value={progress} />
      </section>
    </ContainerCard>
  )
}

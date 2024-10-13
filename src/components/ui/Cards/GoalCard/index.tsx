import { useEffect, useState } from "react"
import { CircleDollarSign } from "lucide-react"
import { MoreGoalOption } from "./SpeedDial"
import { BarLinearProgress, ContainerCard } from "./styles"
import dayjs from "dayjs"
import { priceFormatter } from "../../../../utils/formatter"

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
  const [progress, setProgress] = useState(0)

  const currentPercentage = Math.round((currentValue / targetValue) * 100)

  useEffect(() => {
    setProgress(currentPercentage)
  }, [currentPercentage])

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
          {priceFormatter(currentValue)} de {priceFormatter(targetValue)}
        </strong>
        <BarLinearProgress variant="determinate" value={progress} />
      </section>
    </ContainerCard>
  )
}

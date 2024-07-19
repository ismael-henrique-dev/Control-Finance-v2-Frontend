import { CircleDollarSign } from "lucide-react"
import { useState } from "react"
import { BarLinearProgress, ContainerCard } from "./styles"
import { MouseOverPopover } from "./SpeedDial"

export interface MouseOverProps {
  isGoalsPage: boolean
}

export function GoalCard({isGoalsPage}:MouseOverProps) {
  const [progress, setProgress] = useState(60) // na real progress virá do backend

  return (
    <ContainerCard>
      <header>
        <div>
          <CircleDollarSign size={32} />
          <strong>Juntar essa grana para viajar</strong>
        </div>
        <MouseOverPopover isGoalsPage={isGoalsPage} />
      </header>
      <span>Vencimento: 26/08/2025</span>
      <section>
        <strong>R$ 400,00 de R$ 1000</strong>
        <BarLinearProgress variant="determinate" value={progress} />
      </section>
    </ContainerCard>
  )
}

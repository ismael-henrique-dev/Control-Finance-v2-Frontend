import { useContext } from "react"
import { GoalsContext } from "../contexts/goalsContext"

export function useSummaryGoals() {
  const { goalsList } = useContext(GoalsContext)

  const summary = goalsList.reduce(
    (acc, goal) => {
      acc.total += goal.TargetedValue
      acc.income += goal.Value
      
      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  )

  return summary
}

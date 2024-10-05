import { Goal } from "../contexts/goalsContext"

interface UseSummaryGoalsPros {
  goalsList: Goal[]
}

export function useSummaryGoals({ goalsList }: UseSummaryGoalsPros) {
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

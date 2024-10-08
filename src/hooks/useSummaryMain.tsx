import { useContext, useEffect, useState } from "react"
import { useSummaryGoals } from "./useSummaryGoal"
import { AccountsContext } from "../contexts/accountsContext"
import { useSummaryTransaction } from "./useSummaryTransaction"
import { GoalsContext } from "../contexts/goalsContext"

export function useSummaryMain() {
  const { statics = { totalDeposit: 0, totalWithdraw: 0, sum: 0 } } =
    useContext(AccountsContext) 
  const { goalsList } = useContext(GoalsContext)

  const goals = [
    ...goalsList.CompletedGoals,
    ...goalsList.ExpiredGoals,
    ...goalsList.unCompletedGoals,
  ]

  const summaryTransactions = useSummaryTransaction()
  const summaryGoals = useSummaryGoals({ goalsList: goals })

  const [summary, setSummary] = useState({
    income: 0,
    outcome: 0,
    total: 0,
  })

  useEffect(() => {
    if (statics) {
      const newIncome = statics.totalDeposit + summaryGoals.income
      const newOutcome = statics.totalWithdraw + summaryGoals.outcome
      const newTotal = statics.sum + summaryGoals.outcome

      setSummary((prevSummary) => {
        const newSummary = {
          income: newIncome,
          outcome: newOutcome,
          total: newTotal,
        }

        if (JSON.stringify(prevSummary) !== JSON.stringify(newSummary)) {
          return newSummary
        }

        return prevSummary
      })
    }
  }, [summaryTransactions, summaryGoals, statics])

  return summary
}

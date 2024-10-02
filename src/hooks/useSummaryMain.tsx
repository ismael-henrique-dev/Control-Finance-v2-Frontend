import { useContext, useEffect, useState } from "react"
import { useSummaryGoals } from "./useSummaryGoal"
import { AccountsContext } from "../contexts/accountsContext"
import { useSummaryTransaction } from "./useSummaryTransaction"

export function useSummaryMain() {
  const { statics = { totalDeposit: 0, totalWithdraw: 0, sum: 0 } } =
    useContext(AccountsContext)
  const summaryTransactions = useSummaryTransaction()
  const summaryGoals = useSummaryGoals()

  const [summary, setSummary] = useState({
    income: 0,
    outcome: 0,
    total: 0,
  })

  useEffect(() => {
    if (statics) {
      setSummary((prevSummary) => {
        const newSummary = {
          income:
            summaryTransactions.income +
            summaryGoals.income +
            statics.totalDeposit,
          outcome:
            summaryTransactions.outcome +
            summaryGoals.outcome +
            statics.totalWithdraw,
          total: summaryTransactions.total + summaryGoals.total + statics.sum,
        }

        if (JSON.stringify(prevSummary) !== JSON.stringify(newSummary)) {
          return newSummary
        }

        return prevSummary
      })
    }
  }, [summaryTransactions, summaryGoals])

  return summary
}

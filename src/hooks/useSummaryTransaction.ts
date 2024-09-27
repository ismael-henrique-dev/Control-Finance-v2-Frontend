import { useContext } from "react";
import { TransactionsContext } from "../contexts/transactionsContext";

export function useSummaryTransaction() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.Type === "DEP") {
        acc.income += transaction.Value
        acc.total += transaction.Value
      } else {
        acc.outcome += transaction.Value
        acc.total -= transaction.Value
      }
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
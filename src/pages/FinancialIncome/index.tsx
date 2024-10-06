import { useContext, useEffect, useState } from "react"
import { CardStatus } from "./CardStatus"
import ColumnChart from "./Chart"
import { CustomSelect } from "./Select"
import { FinancialIncomeContainer, ResponsiveContainerPage } from "./styles"
import { TransactionsContext } from "../../contexts/transactionsContext"
import dayjs from "dayjs"
import { SelectChangeEvent } from "@mui/material"
import isoWeek from "dayjs/plugin/isoWeek"
dayjs.extend(isoWeek)

export function FinancialIncome() {
  const [filter, setFilter] = useState<string>("mensal")
  const [series, setSeries] = useState<number[]>([]) 
  const [labels, setLabels] = useState<string[]>([])
  const { transactions } = useContext(TransactionsContext)

  const calculateMonthBalance = (month: number, year: number) => {
    return transactions.reduce(
      (acc, transaction) => {
        const transactionMonth = dayjs(transaction.CreatedAt).month()
        const transactionYear = dayjs(transaction.CreatedAt).year()
        if (transactionMonth === month && transactionYear === year) {
          if (transaction.Type === "DEP") {
            acc.total += transaction.Value
          } else {
            acc.total -= transaction.Value
          }
        }
        return acc
      },
      { total: 0 }
    )
  }

  
  const calculateWeekBalance = (week: number, year: number) => {
    return transactions.reduce(
      (acc, transaction) => {
        const transactionWeek = dayjs(transaction.CreatedAt).isoWeek()
        const transactionYear = dayjs(transaction.CreatedAt).year()
        if (transactionWeek === week && transactionYear === year) {
          if (transaction.Type === "DEP") {
            acc.total += transaction.Value
          } else {
            acc.total -= transaction.Value
          }
        }
        return acc
      },
      { total: 0 }
    )
  }

 
  const calculateYearBalance = (year: number) => {
    return transactions.reduce(
      (acc, transaction) => {
        const transactionYear = dayjs(transaction.CreatedAt).year()
        if (transactionYear === year) {
          if (transaction.Type === "DEP") {
            acc.total += transaction.Value
          } else {
            acc.total -= transaction.Value
          }
        }
        return acc
      },
      { total: 0 }
    )
  }

  useEffect(() => {
    const balances: number[] = []
    const labels: string[] = []

    if (filter === "mensal") {
      for (let i = 4; i >= 0; i--) {
        const month = dayjs().subtract(i, "month").month()
        const year = dayjs().subtract(i, "month").year()
        const balance = calculateMonthBalance(month, year)
        balances.push(balance.total)
        labels.push(dayjs().subtract(i, "month").format("MMMM YYYY"))
      }
    } else if (filter === "semanal") {
      for (let i = 4; i >= 0; i--) {
        const week = dayjs().subtract(i, "week").isoWeek()
        const year = dayjs().subtract(i, "week").year()
        const balance = calculateWeekBalance(week, year)
        balances.push(balance.total)
        labels.push(`Semana ${week}, ${year}`)
      }
    } else if (filter === "anual") {
      for (let i = 4; i >= 0; i--) {
        const year = dayjs().subtract(i, "year").year()
        const balance = calculateYearBalance(year)
        balances.push(balance.total)
        labels.push(`${year}`)
      }
    }

    setSeries(balances)
    setLabels(labels)
  }, [transactions, filter]) 

  const handleChange = (event: SelectChangeEvent<string>) => {
    setFilter(event.target.value)
  }

  return (
    <ResponsiveContainerPage>
      <FinancialIncomeContainer>
        <section>
          <CustomSelect change={handleChange} value={filter} />
          <ColumnChart balance={{ total: series }} chartLabels={labels} />{" "}
          {/* Passa o array de totais */}
        </section>
        <section>
          <strong>Status</strong>
          <CardStatus />
        </section>
      </FinancialIncomeContainer>
    </ResponsiveContainerPage>
  )
}

import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../services/api"
import { CreateTransactionFormSchema } from "../components/NewTransactionModal/transactionFormSchema"

export interface Transaction {
  Title: string
  Value: number
  Type: "DEP" | "SAL"
  AccountId: string
  Categories: string
}

interface TransactionsContextType {
  createTransaction: (transaction: CreateTransactionFormSchema) => Promise<void>
  transactions: Transaction[]
}

interface TransactionsContextProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsContextProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function createTransaction(
    transactionsData: CreateTransactionFormSchema
  ) {
    try {
      const token = localStorage.getItem("@token")
      await api.post("/transaction/create", transactionsData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  async function fetchTransactions() {
    try {
      const token = localStorage.getItem("@token")
      const { data } = await api.get("/transaction", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setTransactions(data.TransactionList)
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ createTransaction, transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

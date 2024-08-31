import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../services/api"

export interface Transaction {
  Title: string
  Value: number
  Type: string
  categories: string
}

interface TransactionsContextType {
  createTransaction: (transaction: Transaction) => Promise<void>
  transactions: Transaction[]
}

interface TransactionsContextProps {
  children: ReactNode
}



export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsContextProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function createTransaction(transactionsData: Transaction) {
    try {
      await api.post("/transactions/create", transactionsData)
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

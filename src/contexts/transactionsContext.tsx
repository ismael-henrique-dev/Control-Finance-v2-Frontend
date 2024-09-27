import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../services/api"
import { CreateTransactionFormSchema } from "../components/NewTransactionModal/transactionFormSchema"
import { EditTransactionFormSchema } from "../pages/Transactions/Table/EditTransactionModal/transactionFormSchema"

export interface Transaction {
  Id: string
  Title: string
  Value: number
  Type: "DEP" | "SAL"
  AccountId: string
  CreatedAt: string
  Categories: string
}

interface TransactionsContextType {
  createTransaction: (transaction: CreateTransactionFormSchema) => Promise<void>
  transactions: Transaction[]
  deleteTransaction: (transactionId: string) => Promise<void>
  updateTransaction: (
    transactionId: string,
    data: EditTransactionFormSchema
  ) => Promise<void>
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
      const { data } = await api.post("/transaction/create", transactionsData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const transaction: Transaction = {
        Id: data.Transaction.Id,
        Title: data.Transaction.Title,
        Value: data.Transaction.Value,
        Type: data.Transaction.Type,
        AccountId: data.Transaction.accountId,
        CreatedAt: data.Transaction.CreatedAt,
        Categories: data.Transaction.Categories,
      }

      setTransactions((prevState) => [transaction, ...prevState])
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

  async function deleteTransaction(transactionId: string) {
    try {
      const token = localStorage.getItem("@token")

      await api.delete(`/transaction/delete/${transactionId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const deleteTransactions = transactions.filter(
        (transaction) => transaction.Id !== transactionId
      )

      setTransactions(deleteTransactions)

      console.log(
        `A transação com Id: ${transactionId} foi deletada com sucesso! `
      )
    } catch (error) {
      console.error(error)
    }
  }

  async function updateTransaction(
    transactionId: string,
    updatedData: EditTransactionFormSchema
  ) {
    try {
      const token = localStorage.getItem("@token")

      const { data } = await api.put(
        `/transaction/update/${transactionId}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const transactionUpdated: Transaction = {
        Id: data.New.Id,
        Title: data.New.Title,
        Value: data.New.Value,
        Type: data.New.Type,
        AccountId: data.New.accountId,
        CreatedAt: data.New.CreatedAt,
        Categories: data.New.Categories,
      }

      const { Title, Value, Type, Categories } = updatedData

      setTransactions((prevState) =>
        prevState.map((transaction) =>
          transaction.Id === transactionUpdated.Id
            ? {
                ...transaction,
                Title: Title,
                Value: Value,
                Type: Type,
                Categories: Categories,
              }
            : transaction
        )
      )

      console.log(
        `A transação com Id: ${transactionId} foi alterada com sucesso! `
      )
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <TransactionsContext.Provider
      value={{
        createTransaction,
        transactions,
        deleteTransaction,
        updateTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

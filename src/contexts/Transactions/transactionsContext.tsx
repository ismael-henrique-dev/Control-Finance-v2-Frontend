import { createContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { CreateTransactionFormSchema } from "../../schemas/transactions/CreateTransactionFormSchema"
import { EditTransactionFormSchema } from "../../schemas/transactions/EditTransactionFormSchema"
import { useLoadingStates } from "../../hooks/useLoadingStates"
import { apiWithToken } from "../../functions"
import { token } from "../../constants"
import { ProviderProps } from "../../@types/context"
import { Transaction, TransactionsContextType } from "./transactions"

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: ProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const { isLoadingTransactionsList, setIsLoadingTransactionsList } =
    useLoadingStates()

  async function createTransaction(
    transactionsData: CreateTransactionFormSchema,
    accountTitle: string
  ) {
    try {
      const { data } = await api.post(
        "/transaction/create",
        transactionsData,
        apiWithToken(token)
      )

      const transaction: Transaction = {
        ...data.Transaction,
        AccountId: data.Transaction.accountId,
        AccountTitle: accountTitle,
      }

      setTransactions((prevState) => [transaction, ...prevState])
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchTransactions() {
    if (token) {
      try {
        setIsLoadingTransactionsList(true)

        const { data } = await api.get("/transaction", apiWithToken(token))
        setTransactions(data.TransactionList)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoadingTransactionsList(false)
      }
    }
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  async function deleteTransaction(transactionId: string) {
    try {
      await api.delete(
        `/transaction/delete/${transactionId}`,
        apiWithToken(token)
      )

      const deleteTransactions = transactions.filter(
        (transaction) => transaction.Id !== transactionId
      )

      setTransactions(deleteTransactions)
    } catch (error) {
      console.error(error)
    }
  }

  async function updateTransaction(
    transactionId: string,
    updatedData: EditTransactionFormSchema
  ) {
    try {
      const { data } = await api.put(
        `/transaction/update/${transactionId}`,
        updatedData,
        apiWithToken(token)
      )

      const transactionUpdated = {
        ...data.New,
        AccountId: data.New.accountId,
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
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <TransactionsContext.Provider
      value={{
        isLoadingTransactionsList,
        transactions,
        createTransaction,
        deleteTransaction,
        updateTransaction,
        fetchTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

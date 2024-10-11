export interface Transaction {
  Id: string
  Title: string
  Value: number
  Type: "DEP" | "SAL"
  AccountId: string
  CreatedAt: string
  Categories: string
  AccountTitle: string
}

export interface TransactionsContextType {
  isLoadingTransactionsList: boolean
  createTransaction: (
    transaction: CreateTransactionFormSchema,
    accountTitle: string
  ) => Promise<void>
  transactions: Transaction[]
  deleteTransaction: (transactionId: string) => Promise<void>
  fetchTransactions: () => Promise<void>
  updateTransaction: (
    transactionId: string,
    data: EditTransactionFormSchema
  ) => Promise<void>
}

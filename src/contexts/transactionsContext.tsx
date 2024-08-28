import { createContext, ReactNode } from "react"

interface TransactionsContextType {}

interface TransactionsContextProps {
  children: ReactNode
}

export interface Transaction {
  Title: string
  Value: number
  Type: string
  categories: string
}

const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children}:TransactionsContextProps) {
  return <TransactionsContext.Provider>{children</TransactionsContext.Provider>
}

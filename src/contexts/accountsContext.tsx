import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../services/api"

interface AccountsProviderProps {
  children: ReactNode
}

interface NewAccountProps {
  Name: string
  Value: number
  Type: string
  Description: string
}

interface AccountsContextType {
  statics: Statics | null
  accountsList: Account[]
  createAccount: (data: NewAccountProps) => Promise<void>
  deleteAccount: (id: string) => Promise<void>
}

export interface Statics {
  sum: number
  totalWithdraw: number
  totalDeposit: number
}

export interface Account {
  sum: number
  WithdrawValue: number
  DepositValue: number
  accountTitle: string
  AcId: string
  Type: string
}

export const AccountsContext = createContext({} as AccountsContextType)

export function AccountsProvider({ children }: AccountsProviderProps) {
  const [accountsList, setAccountsList] = useState<Account[]>([])
  const [statics, setStatics] = useState<Statics | null>(null)

  async function fetchAccounts() {
    const token = localStorage.getItem("@token")
    try {
      const { data } = await api.get("/users/account", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(data)
      setStatics(data.Statics)
      setAccountsList(data.AccountStatics)
      // console.log(`Buscando contas: ${data}`)
    } catch (err) {
      console.error("Error fetching accounts:", err)
    }
  }

  useEffect(() => {
    fetchAccounts()
  }, [])

  async function createAccount(AccountData: NewAccountProps) {
    const token = localStorage.getItem("@token")
    try {
      const { data } = await api.post("/account/register", AccountData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(data)
      
      setAccountsList([...accountsList, data])
    } catch (err) {
      console.error("Error creating account:", err)
    }
  }

  async function deleteAccount(accountId: string) {
    const token = localStorage.getItem("@token")
    try {
      await api.delete(`/account/delete/${accountId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const newAccountsList = accountsList.filter(((account: Account) => account.AcId !== accountId))
      setAccountsList(newAccountsList)

      console.log("Conta deletada!!")
    } catch (err) {
      console.error("Error deleting account:", err)
    }
  }

  return (
    <AccountsContext.Provider
      value={{ accountsList, createAccount, statics, deleteAccount }}
    >
      {children}
    </AccountsContext.Provider>
  )
}

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
  // fetchAccounts: () => Promise<void>
  accountsList: AccountStatic[]
  createAccount: (data: NewAccountProps) => Promise<void>
}

export interface Root {
  Statics: Statics
  AccountStatics: AccountStatic[]
  AccountList: AccountList[]
}

export interface Statics {
  sum: number
}

export interface AccountStatic {
  sum: number
  WithdrawValue: number
  DepositValue: number
  accountTitle: string
}

export interface AccountList {
  Id: string
  Name: string
  Value: number
  userId: string
  Type: string
}

export const AccountsContext = createContext({} as AccountsContextType)

export function AccountsProvider({ children }: AccountsProviderProps) {
  const [accountsList, setAccountsList] = useState<AccountStatic[]>([])

  async function fetchAccounts() {
    const token = localStorage.getItem("@token")
    try {
      const { data } = await api.get("/users/account", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setAccountsList(data.AccountStatics)
      console.log(`Buscando contas: ${data}`)
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
      setAccountsList(data.AccountStatics)
    } catch (err) {
      console.error("Error creating account:", err)
    }
  }

  return (
    <AccountsContext.Provider value={{ accountsList, createAccount }}>
      {children}
    </AccountsContext.Provider>
  )
}

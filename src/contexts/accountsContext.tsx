import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../services/api"

interface AccountsProviderProps {
  children: ReactNode
}

interface Account {
  sum: number
  outcome: number
  income: number
  accountTitle: string
}

interface NewAccountProps {
  Name: string
  Value: number
  Type: string
  Description: string
}

interface AccountsContextType {
  fetchAccounts?: () => Promise<void>
  accountsList: Account[]
  createAccount: (data: NewAccountProps) => Promise<void>
}

interface Data {
  AccountStatics: Account[]
}

export const AccountsContext = createContext({} as AccountsContextType)

export function AccountsProvider({ children }: AccountsProviderProps) {
  const [accountsList, setAccountsList] = useState<Account[]>([])

  async function fetchAccounts() {
    const token = localStorage.getItem("@token")
    try {
      const { data } = await api.get("/users/account", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setAccountsList(data)
      console.log(accountsList)
      console.log(`Buscando contas: ${data}`)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    // fetchAccounts()
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
      console.log(data.AccountStatics)
      // console.log(accountsList)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AccountsContext.Provider value={{ accountsList, createAccount }}>
      {children}
    </AccountsContext.Provider>
  )
}

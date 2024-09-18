import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../services/api"

interface AccountsProviderProps {
  children: ReactNode
}

export interface NewAccountProps {
  Name: string
  Value: number
  Type: string
  Description: string
}

interface AccountsContextType {
  isLoading: boolean
  statics: Statics | null
  accountsList: Account[]
  createAccount: (data: NewAccountProps) => Promise<void>
  deleteAccount: (id: string) => Promise<void>
  updateAccount: (accountId: string, updatedData: UpdatedData) => Promise<void>
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

export interface UpdatedData {
  Name: string
  Description: string
  Type: string
}

export const AccountsContext = createContext({} as AccountsContextType)

export function AccountsProvider({ children }: AccountsProviderProps) {
  const [accountsList, setAccountsList] = useState<Account[]>([])
  const [statics, setStatics] = useState<Statics | null>(null)
  const [isLoading, setIsloading] = useState(false)

  async function fetchAccounts() {
    setIsloading(true)
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
    } catch (err) {
      console.error("Error fetching accounts:", err)
    } finally {
      setIsloading(false)
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

      const newAccount = {
        sum: data.CreateAccount.createdObject.Value,
        WithdrawValue: 0,
        DepositValue: 0,
        accountTitle: data.CreateAccount.createdObject.Name,
        AcId: data.CreateAccount.createdObject.Id,
        Type: AccountData.Type,
      }

      setAccountsList((prevState) => [...prevState, newAccount])
    } catch (err) {
      console.error("Error creating account:", err)
    }
  }

  async function updateAccount(accountId: string, updatedData: UpdatedData) {
    const token = localStorage.getItem("@token")
    try {
      const { data } = await api.put(
        `/account/update/${accountId}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      console.log("Atualizando conta:", data)

      const { Name, Type } = updatedData

      setAccountsList((prevState) =>
        prevState.map((account) =>
          account.AcId === accountId
            ? {
                ...account,
                accountTitle: Name,
                Type: Type,
              }
            : account
        )
      )

      console.log("Conta atualizada com sucesso!")
    } catch (err) {
      console.error("Erro ao atualizar a conta:", err)
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

      const newAccountsList = accountsList.filter(
        (account: Account) => account.AcId !== accountId
      )
      setAccountsList(newAccountsList)

      console.log("Conta deletada!!")
    } catch (err) {
      console.error("Error deleting account:", err)
    }
  }

  return (
    <AccountsContext.Provider
      value={{
        isLoading,
        accountsList,
        createAccount,
        statics,
        deleteAccount,
        updateAccount,
      }}
    >
      {children}
    </AccountsContext.Provider>
  )
}

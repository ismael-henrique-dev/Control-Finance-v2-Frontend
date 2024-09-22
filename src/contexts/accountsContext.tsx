import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../services/api"
import { UpdatedAccountFormSchema } from "../pages/Accounts/EditAccountModal.tsx"

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
  getAccountById: (accountId: string) => Promise<UpdatedAccountFormSchema>
  resetAccounts: () => void
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

  function resetAccounts() {
    setAccountsList([])
    setStatics(null)
  }

  async function fetchAccounts() {
    setIsloading(true)
    const token = localStorage.getItem("@token")
    try {
      const { data } = await api.get("/users/account", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

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
      setIsloading(true)
      const { data } = await api.post("/account/register", AccountData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const newAccount = {
        sum: data.CreateAccount.createdObject.Value,
        WithdrawValue: 0,
        DepositValue: 0,
        accountTitle: data.CreateAccount.createdObject.Name,
        AcId: data.CreateAccount.createdObject.Id,
        Type: AccountData.Type, // Fazer vf
      }

      setAccountsList((prevState) => [...prevState, newAccount])
      setStatics((prevState) => {
        if (!prevState) {
          return {
            sum: newAccount.sum,
            totalWithdraw: 0,
            totalDeposit: 0,
          }
        }
        return {
          ...prevState,
          sum: prevState.sum + newAccount.sum,
        }
      })
    } catch (err) {
      console.error("Error creating account:", err)
    } finally {
      setIsloading(false)
    }
  }

  async function updateAccount(accountId: string, updatedData: UpdatedData) {
    const token = localStorage.getItem("@token")
    try {
      setIsloading(true)
      await api.put(`/account/update/${accountId}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

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
    } catch (err) {
      console.error("Erro ao atualizar a conta:", err)
    } finally {
      setIsloading(false)
    }
  }

  async function deleteAccount(accountId: string) {
    const token = localStorage.getItem("@token")
    try {
      setIsloading(true)
      await api.delete(`/account/delete/${accountId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const accountToRemove = accountsList.find(
        (account: Account) => account.AcId === accountId
      )

      if (accountToRemove) {
        const newAccountsList = accountsList.filter(
          (account: Account) => account.AcId !== accountId
        )
        setAccountsList(newAccountsList)

        setStatics((prevState) => {
          if (!prevState) return prevState

          return {
            ...prevState,
            sum: prevState.sum - accountToRemove.sum,
            totalWithdraw:
              prevState.totalWithdraw - accountToRemove.WithdrawValue,
            totalDeposit: prevState.totalDeposit - accountToRemove.DepositValue,
          }
        })
      }
    } catch (err) {
      console.error("Error deleting account:", err)
    } finally {
      setIsloading(false)
    }
  }

  async function getAccountById(accountId: string) {
    const token = localStorage.getItem("@token")

    try {
      const { data } = await api.get(`/account/view/${accountId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(data.Account)
      return data.Account
    } catch (errr) {
      console.error(errr)
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
        getAccountById,
        resetAccounts,
      }}
    >
      {children}
    </AccountsContext.Provider>
  )
}

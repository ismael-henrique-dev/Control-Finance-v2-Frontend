import { createContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { useLoadingStates } from "../../hooks/useLoadingStates"
import { apiWithToken } from "../../functions"
import { token } from "../../constants"
import { ProviderProps } from "../../@types/context"
import {
  Account,
  AccountsContextType,
  NewAccountProps,
  Statics,
  UpdatedData,
} from "./account"

export const AccountsContext = createContext({} as AccountsContextType)

export function AccountsProvider({ children }: ProviderProps) {
  const [accountsList, setAccountsList] = useState<Account[]>([])
  const [statics, setStatics] = useState<Statics | null>(null)
  const { isLoading, setIsloading } = useLoadingStates()

  function resetAccounts() {
    setAccountsList([])
    setStatics(null)
  }

  async function fetchAccounts() {
    setIsloading(true)

    if (token) {
      try {
        const { data } = await api.get("/users/account", apiWithToken(token))

        setStatics(data.Statics)
        setAccountsList(data.AccountStatics)
      } catch (err) {
        console.error("Error fetching accounts:", err)
      } finally {
        setIsloading(false)
      }
    }
  }

  useEffect(() => {
    fetchAccounts()
  }, [])

  async function createAccount(AccountData: NewAccountProps) {
    try {
      setIsloading(true)
      const { data } = await api.post(
        "/account/register",
        AccountData,
        apiWithToken(token)
      )

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
    try {
      setIsloading(true)
      await api.put(
        `/account/update/${accountId}`,
        updatedData,
        apiWithToken(token)
      )

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
    try {
      setIsloading(true)
      await api.delete(`/account/delete/${accountId}`, apiWithToken(token))

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
    try {
      const { data } = await api.get(
        `/account/view/${accountId}`,
        apiWithToken(token)
      )
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
        fetchAccounts,
      }}
    >
      {children}
    </AccountsContext.Provider>
  )
}

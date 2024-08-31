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
  accountsList: Root | null
  createAccount: (data: NewAccountProps) => Promise<void>
  deleteAccount: (id: string) => Promise<void>
}

export interface Root {
  Statics: Statics
  AccountStatics: AccountStatic[]
  AccountList: AccountList[]
}

export interface Statics {
  sum: number
  totalWithdraw: number
  totalDeposit: number
}

export interface AccountStatic {
  sum: number
  WithdrawValue: number
  DepositValue: number
  accountTitle: string
  accountId: string
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
  const [accountsList, setAccountsList] = useState<Root | null>(null)
  const [statics, setStatics] = useState<Statics | null>(null)

  async function fetchAccounts() {
    const token = localStorage.getItem("@token")
    try {
      const { data } = await api.get("/users/account", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const accountStaticsWithIds = data.AccountStatics.map(
        (account: AccountStatic) => {
          const matchingAccount = data.AccountList.find(
            (acc: AccountList) => acc.Name === account.accountTitle
          )

          return {
            ...account,
            accountId: matchingAccount?.Id,
          }
        }
      )

      setAccountsList({
        ...data,
        AccountStatics: accountStaticsWithIds,
      })
      setStatics(data.Statics)
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
      const { data: newAccount } = await api.post(
        "/account/register",
        AccountData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (accountsList) {
        setAccountsList({
          ...accountsList,
          AccountStatics: [
            ...accountsList.AccountStatics,
            {
              sum: newAccount.Value,
              WithdrawValue:
                newAccount.Type === "withdraw" ? newAccount.Value : 0,
              DepositValue:
                newAccount.Type === "deposit" ? newAccount.Value : 0,
              accountTitle: newAccount.Name,
              accountId: newAccount.Id,
            },
          ],
          AccountList: [...accountsList.AccountList, newAccount],
        })
      } else {
        setAccountsList({
          Statics: {
            sum: newAccount.Value,
            totalWithdraw:
              newAccount.Type === "withdraw" ? newAccount.Value : 0,
            totalDeposit: newAccount.Type === "deposit" ? newAccount.Value : 0,
          },
          AccountStatics: [
            {
              sum: newAccount.Value,
              WithdrawValue:
                newAccount.Type === "withdraw" ? newAccount.Value : 0,
              DepositValue:
                newAccount.Type === "deposit" ? newAccount.Value : 0,
              accountTitle: newAccount.Name,
              accountId: newAccount.Id,
            },
          ],
          AccountList: [newAccount],
        })
      }
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

      // Atualiza o estado para remover o item deletado
      if (accountsList) {
        const updatedAccountStatics = accountsList.AccountStatics.filter(
          (account) => account.accountId !== accountId
        )
        const updatedAccountList = accountsList.AccountList.filter(
          (account) => account.Id !== accountId
        )

        setAccountsList({
          ...accountsList,
          AccountStatics: updatedAccountStatics,
          AccountList: updatedAccountList,
        })
      }

      console.log("Conta deletada!!")
    } catch (err) {
      console.error("Error deleting account:", err)
    }
  }

  return (
    <AccountsContext.Provider
      value={{ accountsList, createAccount, deleteAccount, statics }}
    >
      {children}
    </AccountsContext.Provider>
  )
}

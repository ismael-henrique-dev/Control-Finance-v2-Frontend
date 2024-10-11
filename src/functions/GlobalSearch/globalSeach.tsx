import { useContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { Account, AccountsContext } from "../../contexts/accountsContext"
import {
  Transaction,
  TransactionsContext,
} from "../../contexts/transactionsContext"

interface AccountSeachData extends Account {
  Name?: string
}

interface SuggestionsProps {
  actions: []
  transactions: Transaction[]
  accounts: AccountSeachData[]
}

export function GlobalSearch(query?: string) {
  const { transactions } = useContext(TransactionsContext)
  const { accountsList } = useContext(AccountsContext)
  const [suggestions, setSuggestions] = useState<SuggestionsProps>({
    actions: [],
    transactions: [],
    accounts: [],
  })

  useEffect(() => {
    async function getSearchData(query?: string) {
      if (!query) return

      try {
        const token = localStorage.getItem("@token")
        const { data } = await api.get(`/search/${query}/1`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        setSuggestions({
          actions: [],
          transactions: data.Transactions,
          accounts: data.Accounts,
        })
      } catch (err) {
        console.error(err)
      }
    }

    getSearchData(query)
  }, [query])

  useEffect(() => {
    if (!query) {
      setSuggestions({
        actions: [],
        transactions: transactions,
        accounts: accountsList,
      })
    }
  }, [transactions, accountsList, query])

  return suggestions
}

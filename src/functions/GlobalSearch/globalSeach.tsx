import { useContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { Account } from "../../contexts/Accounts/account"
import { AccountsContext, TransactionsContext } from "../../contexts"
import { Transaction } from "../../contexts/Transactions/transactions"

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

  

  const [debouncedQuery, setDebouncedQuery] = useState(query)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query)
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  }, [query])

  useEffect(() => {
    async function getSearchData(debouncedQuery?: string) {

      if (debouncedQuery)
        try {
          const token = localStorage.getItem("@token")
          const { data } = await api.get(`/search/${debouncedQuery}/1`, {
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

    getSearchData(debouncedQuery)
  }, [debouncedQuery])

  useEffect(() => {
    if (!debouncedQuery) {
      setSuggestions({
        actions: [],
        transactions: transactions,
        accounts: accountsList,
      })
    }
  }, [transactions, accountsList, debouncedQuery])

  

  return suggestions
}

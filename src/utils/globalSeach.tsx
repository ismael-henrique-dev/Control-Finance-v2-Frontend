import { useContext, useEffect, useState } from "react"
import { Transaction, TransactionsContext } from "../contexts/transactionsContext"
import { Account, AccountsContext } from "../contexts/accountsContext"
import { api } from "../services/api"

interface SuggestionsProps {
  actions: []
  transactions: Transaction[]
  accounts: Account[]
}

export function GlobalSearch() {
  const { transactions } = useContext(TransactionsContext)
  const { accountsList } = useContext(AccountsContext)
  const [suggestions, setSuggestions] = useState<SuggestionsProps>({
    actions: [],
    transactions: transactions,
    accounts: accountsList,
  })

  useEffect(() => {
    async function getSeachDara(query?: string) {
      try {
        const token = localStorage.getItem("@token")
        const {data} = await api.get(`/search/${query}/1`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        console.log(data)

      } catch (errr) {
        console.error(errr)
      }
    }

    getSeachDara()
  }, [])

  return suggestions
}

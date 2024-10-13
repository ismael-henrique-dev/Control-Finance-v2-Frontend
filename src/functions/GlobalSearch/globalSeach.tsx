import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Transaction } from "../../contexts/Transactions/transactions"
import { Goal } from "../../contexts/Goals/goals"
import { useLoadingStates } from "../../hooks/useLoadingStates"

interface AccountSeachData {
  Name: string
  Id: string
}

interface SuggestionsProps {
  transactions: Transaction[]
  accounts: AccountSeachData[]
  goals: Goal[]
}

export function GlobalSearch(query?: string) {
  const [debouncedQuery, setDebouncedQuery] = useState(query)
  const {isLoadingSearchResults, setIsLoadingSearchResults} = useLoadingStates()
  const [suggestions, setSuggestions] = useState<SuggestionsProps>({
    transactions: [],
    accounts: [],
    goals: [],
  })

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
          setIsLoadingSearchResults(true)
          const { data } = await api.get(`/search/${debouncedQuery}/1`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          setSuggestions({
            transactions: data.Transactions,
            accounts: data.Accounts,
            goals: data.Goals,
          })

          console.log(data)
        } catch (err) {
          console.error(err)
        } finally {
          setIsLoadingSearchResults(false)
        }
    }

    getSearchData(debouncedQuery)
  }, [debouncedQuery])

  return {
    suggestions,
    isLoadingSearchResults
  }
}

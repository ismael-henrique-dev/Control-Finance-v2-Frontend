import { useState } from "react"

export function useLoadingStates() {
  const [isLoading, setIsloading] = useState(false)
  const [isLoadingStatic, setIsLoadingStatic] = useState(false)
  const [isLoadingDeleteAccount, setIsLoadingDeleteAccount] = useState(false)
  const [isLoadingResetAccount, setIsLoadingResetAccount] = useState(false)
  const [isLoadingDataUser, setIsLoadingDataUser] = useState(false)
  const [isLoadingGoals, setIsLoadingGoals] = useState(false)
  const [isLoadingTransactionsList, setIsLoadingTransactionsList] =
    useState(false)
  const [isLoadingSearchResults, setIsLoadingSearchResults] = useState(false)

  return {
    isLoadingStatic,
    setIsLoadingStatic,
    isLoadingDeleteAccount,
    setIsLoadingDeleteAccount,
    isLoadingResetAccount,
    setIsLoadingResetAccount,
    isLoadingDataUser,
    setIsLoadingDataUser,
    isLoadingGoals,
    setIsLoadingGoals,
    isLoadingTransactionsList,
    setIsLoadingTransactionsList,
    isLoading,
    setIsloading,
    isLoadingSearchResults,
    setIsLoadingSearchResults,
  }
}

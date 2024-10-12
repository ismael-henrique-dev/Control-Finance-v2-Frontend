import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { ProfileFormData } from "../../pages/Profile"
import { AccountsContext, GoalsContext, TransactionsContext } from ".."
import { useLoadingStates } from "../../hooks/useLoadingStates"
import { token } from "../../constants"
import { apiWithToken } from "../../functions"
import { ProviderProps } from "../../@types/context"
import {
  AccountState,
  RelativeCategoryStatsProps,
  User,
  UserLoginFormData,
  UserProviderType,
  UserRegisterFormData,
} from "./user"


const initialValueStatic = {
  DEP: 0,
  SAL: 0,
  PercentageOfReturnByCategorie: {},
  PercentageOfReturnByDep: {},
  PercentageOfReturnBySal: {},
}

export const UserContext = createContext({} as UserProviderType)

export function UseProvider({ children }: ProviderProps) {
  const [userData, setUserData] = useState<User | null>(null)
  const [accountState, setAccountState] = useState<AccountState | null>(null)
  const [relativeCategoryStats, setRelativeCategoryStats] =
    useState<RelativeCategoryStatsProps>(initialValueStatic)
  const {
    isLoadingDataUser,
    isLoadingDeleteAccount,
    isLoadingResetAccount,
    isLoadingStatic,
    setIsLoadingDataUser,
    setIsLoadingDeleteAccount,
    setIsLoadingResetAccount,
    setIsLoadingStatic,
  } = useLoadingStates()
  const { fetchTransactions } = useContext(TransactionsContext)
  const { fetchGoals } = useContext(GoalsContext)
  const { fetchAccounts } = useContext(AccountsContext)

  const navigate = useNavigate()
  const pathname = window.location.pathname

  async function userRegister(data: UserRegisterFormData) {
    try {
      await api.post("/users/register", data)
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }

  async function userLogin(userData: UserLoginFormData) {
    try {
      setIsLoadingDataUser(true)
      const { data } = await api.patch("/auth/login", userData)
      localStorage.setItem("@token", data.Token)

      await loadUser()
      await fetchUserStatic()
    } catch (error) {
      console.error("Informações incorretas")
    } finally {
      setIsLoadingDataUser(false)
      navigate("/")
      await fetchTransactions()
      await fetchGoals()
      await fetchAccounts()
    }
  }

  async function loadUser() {
    if (token) {
      try {
        const { data } = await api.get(`/auth/profile`, apiWithToken(token))
        setUserData(data.Profile)
        navigate(pathname)
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    loadUser()
  }, [])

  function userLogout() {
    localStorage.removeItem("@token")
    setUserData(null)
    loadUser()
    navigate("/login")
  }

  async function userResetAccount() {
    try {
      setIsLoadingResetAccount(true)
      await api.delete(`/users/reset`, apiWithToken(token))

      loadUser()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingResetAccount(false)
    }
  }

  async function userDeleteAccount() {
    try {
      setIsLoadingDeleteAccount(true)
      await api.delete(`/users/reset`, apiWithToken(token))

      navigate("/singUp")
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingDeleteAccount(false)
    }
  }

  async function fetchUserStatic() {
    if (token) {
      try {
        setIsLoadingStatic(true)
        const { data } = await api.get("/users/statistic", apiWithToken(token))

        setAccountState(data.AccountState)
        setRelativeCategoryStats(data.Relative)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoadingStatic(false)
      }
    }
  }

  useEffect(() => {
    fetchUserStatic()
  }, [])

  async function UserVisitMode() {
    try {
      const { data } = await api.patch("/auth/login/guest", {})
      localStorage.setItem("@token", data.Token)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  async function updateUserProfile(data: ProfileFormData) {
    try {
      await api.put(`/users/update`, data, apiWithToken(token))
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <UserContext.Provider
      value={{
        UserVisitMode,
        userRegister,
        userLogin,
        userLogout,
        userResetAccount,
        userDeleteAccount,
        updateUserProfile,
        setUserData,
        userData,
        accountState,
        relativeCategoryStats,
        isLoadingStatic,
        isLoadingDeleteAccount,
        isLoadingResetAccount,
        isLoadingDataUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

import { createContext, ReactNode, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"
import { ProfileFormData } from "../pages/Profile"

interface UserContextProps {
  children: ReactNode
}

interface UserLoginFormData {
  Email: string
  Senha: string
}

interface UserRegisterFormData extends UserLoginFormData {
  UsernName: string
}

interface User {
  Email: string
  Id: string
  Senha: string
  UsernName: string
  ProfileUrl: string
}

interface UserProviderType {
  userRegister: (data: UserRegisterFormData) => Promise<void>
  UserVisitMode: () => Promise<void>
  userLogin: (data: UserLoginFormData) => Promise<void>
  userLogout: () => void
  userResetAccount: () => void
  userDeleteAccount: () => void
  updateUserProfile: (data: ProfileFormData) => void
  userData: User | null
  accountState: AccountState | null
  relativeCategoryStats: RelativeCategoryStatsProps
  isLoadingStatic: boolean
  isLoadingDeleteAccount: boolean
  isLoadingResetAccount: boolean
}

type Status = "Danger" | "Ok" | "Good"

interface AccountState {
  AndamentoDasMetas: Status
  Economista: Status
  GastosEssenciais: Status
  Investimentos: Status
}

interface RelativeCategoryStatsProps {
  DEP: number
  SAL: number
  PercentageOfReturnByCategorie: Record<string, number>
  PercentageOfReturnByDep: Record<string, number>
  PercentageOfReturnBySal: Record<string, number>
}

export const UserContext = createContext({} as UserProviderType)

export function UseProvider({ children }: UserContextProps) {
  const [userData, setUserData] = useState<User | null>(null)
  const [isLoadingStatic, setIsLoadingStatic] = useState(false)
  const [isLoadingDeleteAccount, setIsLoadingDeleteAccount] = useState(false)
  const [isLoadingResetAccount, setIsLoadingResetAccount] = useState(false)
  const [accountState, setAccountState] = useState<AccountState | null>(null)
  const [relativeCategoryStats, setRelativeCategoryStats] =
    useState<RelativeCategoryStatsProps>({
      DEP: 0,
      SAL: 0,
      PercentageOfReturnByCategorie: {},
      PercentageOfReturnByDep: {},
      PercentageOfReturnBySal: {},
    })

  const navigate = useNavigate()
  const pathname = window.location.pathname

  async function userRegister(data: UserRegisterFormData) {
    try {
      await api.post("/users/register", data)
      navigate("/")
      
    } catch (error) {
      console.log(error)
    }
  }

  async function userLogin(userData: UserLoginFormData) {
    try {
      const { data } = await api.patch("/auth/login", userData)
      localStorage.setItem("@token", data.Token)
      navigate("/")
    } catch (error) {
      console.error("Informações incorretas")
    }
  }

  async function loadUser() {
    const token = localStorage.getItem("@token")

    if (token) {
      try {
        const { data } = await api.get(`/auth/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        console.log(data.Profile)
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
    const token = localStorage.getItem("@token")

    try {
      setIsLoadingResetAccount(true)
      await api.delete(`/users/reset`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      loadUser()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingResetAccount(false)
    }
  }

  async function userDeleteAccount() {
    const token = localStorage.getItem("@token")

    try {
      setIsLoadingDeleteAccount(true)
      await api.delete(`/users/reset`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      console.log(`Conta deletada com sucesso!`)
      navigate("/singUp")
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingDeleteAccount(false)
    }
  }

  async function fetchUserStatic() {
    try {
      setIsLoadingStatic(true)
      const token = localStorage.getItem("@token")
      const { data } = await api.get("/users/statistic", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setAccountState(data.AccountState)
      setRelativeCategoryStats(data.Relative)
    } catch (errr) {
      console.log(errr)
    } finally {
      setIsLoadingStatic(false)
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
    } catch (errr) {
      console.log(errr)
    }
  }

  async function updateUserProfile(data: ProfileFormData) {
    const token = localStorage.getItem("@token")
    try {
      await api.put(`/users/update`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
        userData,
        accountState,
        relativeCategoryStats,
        isLoadingStatic,
        isLoadingDeleteAccount,
        isLoadingResetAccount,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

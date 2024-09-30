import { createContext, ReactNode, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"

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
}

interface UserProviderType {
  userRegister: (data: UserRegisterFormData) => Promise<void>
  userLogin: (data: UserLoginFormData) => Promise<void>
  userLogout: () => void
  userResetAccount: () => void
  userDeleteAccount: () => void
  userData: User | null
}

type Status = "Danger" | "Ok"

interface AccountState {
  AndamentoDasMetas: Status
  Economista: Status
  GastosEssenciais: Status
  Investimentos: Status
}

export const UserContext = createContext({} as UserProviderType)

export function UseProvider({ children }: UserContextProps) {
  const [userData, setUserData] = useState<User | null>(null)
  const [accountState, setAccountState] = useState<AccountState>()

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

  useEffect(() => {
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
    loadUser()
  }, [])

  function userLogout() {
    localStorage.removeItem("@token")
    setUserData(null)
    navigate("/login")
  }

  async function userResetAccount() {
    const token = localStorage.getItem("@token")

    try {
      await api.delete(`/users/reset`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      console.log(`Conta resetada com sucesso!`)
    } catch (error) {
      console.log(error)
    }
  }

  async function userDeleteAccount() {
    const token = localStorage.getItem("@token")

    try {
      await api.delete(`/users/reset`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      console.log(`Conta deletada com sucesso!`)
      navigate("/singUp")
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchUserStatic() {
    try {
      const token = localStorage.getItem("@token")
      const { data } = await api.get("/users/statistic", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      
      console.log(data)
      setAccountState(data.AccountState)
      console.log(accountState)
    } catch (errr) {
      console.log(errr)
    }
  }

  useEffect(() => {
    fetchUserStatic()
  }, [])

  return (
    <UserContext.Provider
      value={{
        userRegister,
        userLogin,
        userLogout,
        userResetAccount,
        userDeleteAccount,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

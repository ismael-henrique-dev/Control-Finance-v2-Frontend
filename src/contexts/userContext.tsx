import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"

interface UserContextProps {
  children: ReactNode
}

interface UserRegisterFormData {
  Email: string
  Senha: string
  UsernName: string
}

interface UserLoginFormData {
  Email: string
  Senha: string
  // UsernName: string
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
  userData: User | null
}

export const UserContext = createContext({} as UserProviderType)

export function UseProvider({ children }: UserContextProps) {
  const [userData, setUserData] = useState<User | null>(null)

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
  }, [pathname, navigate])

  return (
    <UserContext.Provider value={{ userRegister, userLogin, userData }}>
      {children}
    </UserContext.Provider>
  )
}

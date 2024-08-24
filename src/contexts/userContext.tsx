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

interface UserProviderType {
  userRegister: (data: UserRegisterFormData) => Promise<void>
  userLogin: (data: UserLoginFormData) => Promise<void>
  // userData: 
}

export const UserContext = createContext({} as UserProviderType)

export function UseProvider({ children }: UserContextProps) {
  const [userData, setUserData] = useState(null)

  const navigate = useNavigate()

  async function userRegister(data: UserRegisterFormData) {
    try {
      await api.post("/users/register", data)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  async function userLogin(userData: UserLoginFormData) {
    try {
      const { data } = await api.patch("/auth/login", userData)
      localStorage.setItem("@token", data.Token)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@token")

      if (token) {
        try {
          const { data } = await api.get(`/auth/profile`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          console.log(data.Profile)
          setUserData(data)
          navigate("/")
        } catch (error) {
          console.log(error)
        }
      }
    }
    loadUser()
  }, [])

  return (
    <UserContext.Provider value={{ userRegister, userLogin }}>
      {children}
    </UserContext.Provider>
  )
}

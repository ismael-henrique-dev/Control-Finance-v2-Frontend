import { createContext, ReactNode, useState } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"

interface UserContextProps {
  children: ReactNode
}

interface UserRegisterFormData {

}

interface UserProviderType {
  userRegister: () => void
}

export const UserContext = createContext({} as UserProviderType)

export function UseProvider({children}:UserContextProps) {
  // const [user, setUser] = useState(null)

  // const navigate = useNavigate()

  const userRegister = async (formData:UserRegisterFormData) => {
    try {
      api.post("/users/register", formData)
      // navigate('/login')
    } catch(error) {
      console.log(error)
    }
  }

  
  
  
  return (
    <UserContext.Provider value={{userRegister, }}>
      {children}
    </UserContext.Provider>
  )
}

import { createContext, ReactNode } from "react"
import { api } from "../services/api"

interface UserContextProps {
  children: ReactNode
}

interface UserRegisterFormData {
  Email: string
  Senha: string
  UsernName: string
}

interface UserProviderType {
  userRegister: (data: UserRegisterFormData) => Promise<void>
}

export const UserContext = createContext({} as UserProviderType)

export function UseProvider({ children }: UserContextProps) {
  // const [user, setUser] = useState(null)

  // const navigate = useNavigate()

  async function userRegister(data: UserRegisterFormData) {
    try {
      await api.post("/users/register", data)
      // navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserContext.Provider value={{ userRegister }}>
      {children}
    </UserContext.Provider>
  )
}

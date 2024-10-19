import { AuthContainer, Button, Divisory } from "./styles"
import { NavLink } from "react-router-dom"
import { PersonStanding } from "lucide-react"
import iconGoogle from "../../../assets/icon-google.svg"
import { ReactNode, useContext } from "react"
import { useGoogleLogin } from "@react-oauth/google" 
import { UserContext } from "../../../contexts/User/userContext"
import axios from "axios" 
interface AuthLoginProps {
  children?: ReactNode
  isLogin: boolean
  text: string
  authType: string
  navLinkText: string
  routeAuth: "/login" | "/singUp"
}

export function AuthForm({
  isLogin,
  text,
  authType,
  routeAuth,
  navLinkText,
  children,
}: AuthLoginProps) {
  const { UserVisitMode, userRegister, userLogin } = useContext(UserContext)

  const registerWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        )

        await userRegister({
          Email: userInfo.data.email,
          Senha: userInfo.data.sub,
          UsernName: userInfo.data.name,
        })

        
      } catch (error) {
        console.error("Erro ao obter informações do usuário", error)
      }
    },
    onError: () => {
      console.log("Erro ao fazer login com Google")
    },
  })

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        )

        await userLogin({
          Email: userInfo.data.email,
          Senha: userInfo.data.sub,
        })
      } catch (error) {
        console.error("Erro ao obter informações do usuário", error)
      }
    },
    onError: () => {
      console.log("Erro ao fazer login com Google")
    },
  })

  async function submitUserVisitMode() {
    await UserVisitMode()
  }

  return (
    <AuthContainer>
      {children}

      {isLogin && <NavLink to="/">esqueceu a senha?</NavLink>}
      <Divisory>ou</Divisory>
      <section>
        {!isLogin && (
          <Button variant="goToWithGoogle" onClick={() => registerWithGoogle()}>
            <img src={iconGoogle} />
            {authType} com o google
          </Button>
        )}
        {isLogin && (
          <>
            <Button variant="goToWithGoogle" onClick={() => loginWithGoogle()}>
              <img src={iconGoogle} />
              {authType} com o google
            </Button>
            <Button
              type="button"
              variant="visitMode"
              onClick={submitUserVisitMode}
            >
              <PersonStanding />
              Entrar como visitante
            </Button>
          </>
        )}
      </section>
      <span>
        {text}
        <NavLink to={routeAuth}>
          {""}
          <strong>{navLinkText}</strong>
        </NavLink>
      </span>
    </AuthContainer>
  )
}


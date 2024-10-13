import { AuthContainer, Button, Divisory } from "./styles"
import { NavLink } from "react-router-dom"
import { PersonStanding } from "lucide-react"
import iconGoogle from "../../../assets/icon-google.svg"
import { ReactNode, useContext } from "react"
import { UserContext } from "../../../contexts/User/userContext"

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
  const { UserVisitMode } = useContext(UserContext)

  async function submitUserVisitMode() {
    await UserVisitMode()
  }

  return (
    <AuthContainer>
      {children}

      {isLogin && <NavLink to="/">esqueceu a senha?</NavLink>}
      <Divisory>ou</Divisory>
      <section>
        <Button variant="goToWithGoogle">
          <img src={iconGoogle} />
          {authType} com o google
        </Button>
        {isLogin && (
          <Button
            type="button"
            variant="visitMode"
            onClick={submitUserVisitMode}
          >
            <PersonStanding />
            Entrar como visitante
          </Button>
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

import { Sponsor } from "../../components/Auth/Sponsor"
import { AuthResposiveContainer } from "../../components/Auth/ResposiveContainer"
import { AuthForm } from "../../components/Auth/AuthForm"

export function Login() {
  return (
    <AuthResposiveContainer>
      <Sponsor />
      <AuthForm
        isLogin
        routeAuth="/singUp"
        text="Não tem uma conta? "
        navLinkText="Cadraste-se"
        authType="Entrar"
      />
    </AuthResposiveContainer>
  )
}

import { Sponsor } from "../../components/Auth/Sponsor"
import { ResposiveContainerAuth } from "../../components/Auth/ResposiveContainer"
import { AuthForm } from "../../components/Auth/AuthForm"

export function Login() {
  return (
    <ResposiveContainerAuth>
      <Sponsor />
      <AuthForm
        isLogin
        routeAuth="/singUp"
        text="Não tem uma conta? "
        navLinkText="Cadraste-se"
        authType="Entrar"
      />
    </ResposiveContainerAuth>
  )
}

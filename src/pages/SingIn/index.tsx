import { Sponsor } from "../../components/Auth/Sponsor"
import { AuthForm } from "../../components/Auth/AuthForm"
import { ResposiveContainerAuth } from "../../components/Auth/ResposiveContainer"

export function SingUp() {
  return (
    <ResposiveContainerAuth>
      <Sponsor />
      <AuthForm
        isLogin={false}
        text="já tem uma conta? "
        authType="Cadraste-se"
        routeAuth="/login"
        navLinkText="Entrar"
      />
    </ResposiveContainerAuth>
  )
}

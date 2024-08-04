import { Sponsor } from "../../components/Auth/Sponsor"
import { AuthForm } from "../../components/Auth/AuthForm"
import { AuthResposiveContainer } from "../../components/Auth/ResposiveContainer"

export function SingUp() {
  return (
    <AuthResposiveContainer>
      <Sponsor />
      <AuthForm
        isLogin={false}
        text="já tem uma conta? "
        authType="Cadraste-se"
        routeAuth="/login"
        navLinkText="Entrar"
      />
    </AuthResposiveContainer>
  )
}

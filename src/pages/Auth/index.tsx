import { useContext } from "react"
import logoWhite from "../../assets/logo-white.svg"
import logoDark from "../../assets/logo-dark.svg"
import { ThemeContext } from "../../contexts/Theme/styledThemeContext"
import { InputOTP } from "./InputOTP"
import { AuthContainer } from "./styles"

const erro = "Erro" // SÓ PRA ESTILIZAR

export function Auth() {
  const themeContext = useContext(ThemeContext)
  const { theme } = themeContext

  return (
    <AuthContainer>
      <img src={theme === "light" ? logoWhite : logoDark} />
      <strong>Autenticação cadastral</strong>
      <p>
        Enviamos o código de confirmação para seu email, basta inseri-lo no
        campo abaixo.
      </p>
      <InputOTP />
      <button>Validar código</button>
      {!erro && <span>Código inválido</span>}
      <p>
        Não recebeu o código de verificação? <span>Enviar novamente</span>
      </p>
    </AuthContainer>
  )
}

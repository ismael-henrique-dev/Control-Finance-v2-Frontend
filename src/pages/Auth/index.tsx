import logoWhite from "../../assets/logo-white.svg"
import { InputOTP } from "./InputOTP"
import { AuthContainer } from "./styles"

const erro = "Erro" // SÓ PRA ESTILIZAR

export function Auth() {
  return (
    <AuthContainer>
      <img src={logoWhite} />
      <strong>Autenticação cadastral</strong>
      <p>
        Enviamos o código de confirmação para seu email, basta inseri-lo no
        campo abaixo.
      </p>
      <InputOTP />
      <button>Validar código</button>
      {!erro && (<span>Código inválido</span>)}
      <p>
        Não recebeu o código de verificação? <span>Enviar novamente</span>
      </p>
    </AuthContainer>
  )
}

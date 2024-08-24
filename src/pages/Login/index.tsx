import { Sponsor } from "../../components/Auth/Sponsor"
import { AuthResposiveContainer } from "../../components/Auth/ResposiveContainer"
import { AuthForm } from "../../components/Auth/AuthForm"
import { TextFiled } from "../../components/TextField"
import InputLabel from "@mui/material/InputLabel"
import Input from "@mui/material/Input"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import { Button } from "../../components/Auth/AuthForm/styles"
import { LockOpen, Lock } from "lucide-react"
import { useContext, useState } from "react"
import { UserContext } from "../../contexts/userContext"
import { useForm } from "react-hook-form"

interface UserLoginFormData {
  Email: string
  Senha: string
  // UsernName: string
}

export function Login() {
  const [showPassword, setShowPassword] = useState(false)

  function handleClickShowPassword() {
    setShowPassword(!showPassword)
  }

  const { userLogin } = useContext(UserContext)

  const { register, handleSubmit } = useForm<UserLoginFormData>()

  async function handleUserLogin(data: UserLoginFormData) {
    const { Email, Senha } = data
    console.log(data)

    await userLogin({ Email, Senha })
  }

  return (
    <AuthResposiveContainer>
      <Sponsor />
      <AuthForm
        isLogin
        routeAuth="/singUp"
        text="Não tem uma conta? "
        navLinkText="Cadraste-se"
        authType="Entrar"
      >
        <form onSubmit={handleSubmit(handleUserLogin)}>
          <TextFiled variant="standard">
            <InputLabel htmlFor="user-email">Email</InputLabel>
            <Input
              type="email"
              id="user-email"
              error={false}
              {...register("Email")}
            />
          </TextFiled>
          <TextFiled variant="standard">
            <InputLabel htmlFor="user-password">Senha</InputLabel>
            <Input
              id="user-password"
              type={showPassword ? "text" : "password"}
              {...register("Senha")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <LockOpen /> : <Lock />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button type="submit">Entrar</Button>
          </TextFiled>
        </form>
      </AuthForm>
    </AuthResposiveContainer>
  )
}

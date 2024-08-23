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
import { useState } from "react"

export function Login() {
  const [showPassword, setShowPassword] = useState(false)

  function handleClickShowPassword() {
    setShowPassword(!showPassword)
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
        <form action="">
          <TextFiled variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
            <Input type="email" error={false} />
          </TextFiled>
          <TextFiled variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
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

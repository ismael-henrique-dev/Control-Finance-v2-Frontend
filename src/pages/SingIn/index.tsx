import { Sponsor } from "../../components/Auth/Sponsor"
import { AuthForm } from "../../components/Auth/AuthForm"
import { AuthResposiveContainer } from "../../components/Auth/ResposiveContainer"
import { TextFiled } from "../../components/TextField"
import InputLabel from "@mui/material/InputLabel"
import Input from "@mui/material/Input"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import { useState } from "react"
import { LockOpen, Lock } from "lucide-react"
import { Button } from "../../components/Auth/AuthForm/styles"

export function SingUp() {

   const [showPassword, setShowPassword] = useState(false)

   function handleClickShowPassword() {
     setShowPassword(!showPassword)
   }
   
  return (
    <AuthResposiveContainer>
      <Sponsor />
      <AuthForm
        isLogin={false}
        text="já tem uma conta? "
        authType="Cadraste-se"
        routeAuth="/login"
        navLinkText="Entrar"
      >
        <form action="">
          <TextFiled variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Nome</InputLabel>
            <Input type="text" error={false} />
          </TextFiled>
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
            <Button type="submit">Cadrastar</Button>
          </TextFiled>
        </form>
      </AuthForm>
    </AuthResposiveContainer>
  )
}

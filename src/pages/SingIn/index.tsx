import { Sponsor } from "../../components/Auth/Sponsor"
import { AuthForm } from "../../components/Auth/AuthForm"
import { AuthResposiveContainer } from "../../components/Auth/ResposiveContainer"
import { TextFiled } from "../../components/TextField"
import InputLabel from "@mui/material/InputLabel"
import Input from "@mui/material/Input"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import { useContext, useState } from "react"
import { LockOpen, Lock } from "lucide-react"
import { Button } from "../../components/Auth/AuthForm/styles"
import { useForm } from "react-hook-form"
import { UserContext } from "../../contexts/userContext"

interface UserRegisterFormData {
  Email: string
  Senha: string
  UsernName: string
}

export function SingUp() {
  const [showPassword, setShowPassword] = useState(false)

  const { userRegister } = useContext(UserContext)

  function handleClickShowPassword() {
    setShowPassword(!showPassword)
  }

  const { register, handleSubmit } = useForm<UserRegisterFormData>()

  async function handleUserRegister(data: UserRegisterFormData) {
    const { Email, Senha, UsernName } = data

    console.log(data)

    await userRegister({
      Email,
      Senha,
      UsernName,
    })
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
        <form onSubmit={handleSubmit(handleUserRegister)}>
          <TextFiled variant="standard">
            <InputLabel htmlFor="user-name">Nome</InputLabel>
            <Input
              type="text"
              id="user-name"
              error={false}
              {...register("UsernName")}
            />
          </TextFiled>
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
              {...register("Senha")}
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

import { useState } from "react"
import logoWhite from "../../assets/logo-white.svg"
import sponsor from "../../assets/sponsor.svg"
import iconGoogle from "../../assets/icon-google.svg"

import { IconButton, Input, InputAdornment, InputLabel } from "@mui/material"
import { Lock, LockOpen, PersonStanding } from "lucide-react"
import { Button, ContainerLogin, ContainerSponsor, Form, FormControlContainer, MainContainer } from "./styles"
import { NavLink } from "react-router-dom"

export function Login() {
  const [showPassword, setShowPassword] = useState(false)

  function handleClickShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <MainContainer>
      <ContainerLogin>
        <ContainerSponsor>
          <img src={logoWhite} alt="logo control finance v2" />
          <span>Domine suas finanças com o Control Finance.</span>
          <img src={sponsor} />
          <span>
            Monitore gastos, crie orçamentos e alcance suas metas financeiras
            com facilidade.
          </span>
        </ContainerSponsor>
        <Form>
          <FormControlContainer variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
            <Input type="email" />
          </FormControlContainer>
          <FormControlContainer variant="standard">
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
          </FormControlContainer>
          <Button type="submit">Entrar</Button>
          <NavLink to="/">esqueceu a senha?</NavLink>
          <fieldset>
            <legend>ou</legend>
          </fieldset>
          <section>
            <Button type="submit" variant="goToWithGoogle">
              <img src={iconGoogle}  />
              Entrar com o google
            </Button>
            <Button type="submit" variant="visitMode">
              <PersonStanding />
              Entrar como visitante
            </Button>
          </section>
          <span>
            Ainda não tem uma conta?{" "}
            <NavLink to="/">
              <strong>Cadraste-se</strong>
            </NavLink>
          </span>
        </Form>
      </ContainerLogin>
    </MainContainer>
  )
}

import { useContext, useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Lock, Mail, Unlock, UserRound } from "lucide-react"
import { InputFileUpload } from "./InputFileUpload"
import { EditableInputContainer } from "./EditableInput"
import {
  Button,
  Card,
  ContainerButtonsForm,
  ContainerCards,
  ContainerForm,
  ContainerInputs,
  Label,
  ProfileContainer,
  ResponsiveContainerPage,
} from "./styles"
import { UserContext } from "../../contexts/userContext"
import { AccountsContext } from "../../contexts/accountsContext"

const profileFormShema = z.object({
  email: z.string(),
  password: z.string(),
  name: z.string(),
})

type ProfileFormSchema = z.infer<typeof profileFormShema>

export function Profile() {
  const [showPassword, setShowPassword] = useState(false)
  const { userResetAccount, userDeleteAccount } = useContext(UserContext)
  const { resetAccounts } = useContext(AccountsContext)
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const { register, handleSubmit } = useForm<ProfileFormSchema>({
    resolver: zodResolver(profileFormShema),
  })

  function handleGetDataByProfile(data: ProfileFormSchema) {
    console.log(data)
  }

  async function handleUserResetAccount() {
    resetAccounts()
    await userResetAccount()
  }

  async function handleUserDeleteAccount() {
    await userDeleteAccount()
  }

  return (
    <ResponsiveContainerPage>
      <ProfileContainer>
        <ContainerForm onSubmit={handleSubmit(handleGetDataByProfile)}>
          <InputFileUpload />
          <ContainerInputs>
            <Label htmlFor="email-input">Email</Label>
            <EditableInputContainer>
              <Mail />
              <input type="email" id="email-input" {...register("email")} />
            </EditableInputContainer>
            <Label htmlFor="password-input">Senha</Label>
            <EditableInputContainer>
              {showPassword ? (
                <Unlock onClick={handleShowPassword} />
              ) : (
                <Lock onClick={handleShowPassword} />
              )}
              <input
                type={showPassword ? "text" : "password"}
                id="password-input"
                {...register("password")}
              />
            </EditableInputContainer>
            <Label htmlFor="name-input">Nome</Label>
            <EditableInputContainer>
              <UserRound />
              <input type="text" id="name-input" {...register("name")} />
            </EditableInputContainer>
            <ContainerButtonsForm>
              <Button>Cancelar</Button>
              <Button type="submit" variant="purple">
                Alterar dados
              </Button>
            </ContainerButtonsForm>
          </ContainerInputs>
        </ContainerForm>
        <ContainerCards>
          <Label>Excluir conta</Label>
          <Card>
            <p>
              Ao excluir sua conta, todas as suas transações, metas, contas e
              outros dados serão permanentemente perdidos. Portanto, você não
              poderá recuperar seus dados nem fazer login novamente.
            </p>
            <Button
              type="button"
              onClick={handleUserDeleteAccount}
              variant="red"
            >
              Excluir conta
            </Button>
          </Card>
          <Label>Resetar conta</Label>
          <Card>
            <p>
              Ao reiniciar sua conta, você terá acesso cadastral novamente, no
              entanto, todos os seus dados serão resetados.
            </p>
            <Button
              type="button"
              onClick={handleUserResetAccount}
              variant="purple"
            >
              Resetar conta
            </Button>
          </Card>
        </ContainerCards>
      </ProfileContainer>
    </ResponsiveContainerPage>
  )
}

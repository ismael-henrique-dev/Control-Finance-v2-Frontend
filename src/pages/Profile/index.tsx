import { useContext, useEffect } from "react"
import { AccountsContext, UserContext } from "../../contexts"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Lock, Mail, UserRound } from "lucide-react"
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

const profileFormShema = z.object({
  email: z.string(),
  password: z.string(),
  name: z.string(),
})

export type ProfileFormData = z.infer<typeof profileFormShema>

export function Profile() {
  const {
    userResetAccount,
    userDeleteAccount,
    updateUserProfile,
    userData,
    isLoadingResetAccount,
    isLoadingDeleteAccount,
  } = useContext(UserContext)
  const { resetAccounts } = useContext(AccountsContext)
  

  const { register, handleSubmit, reset, formState } = useForm<ProfileFormData>(
    {
      resolver: zodResolver(profileFormShema),
    }
  )

  useEffect(() => {
    if (userData) {
      reset({
        email: userData.Email,
        name: userData.UsernName,
        password: userData.Senha,
      })
    }
  }, [userData])

  async function handleUpdateUserAccount(data: ProfileFormData) {
    console.log(data)
    await updateUserProfile(data)
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
        <ContainerForm onSubmit={handleSubmit(handleUpdateUserAccount)}>
          <InputFileUpload />
          <ContainerInputs>
            <Label htmlFor="email-input">Email</Label>
            <EditableInputContainer>
              <Mail />
              <input type="email" id="email-input" {...register("email")} />
            </EditableInputContainer>
            <Label htmlFor="password-input">Senha</Label>
            <EditableInputContainer>
              <Lock />
              <input
                type="password"
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
              <Button disabled={!formState.isDirty}>Cancelar</Button>
              <Button
                type="submit"
                variant="purple"
                disabled={!formState.isDirty}
              >
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
              {isLoadingDeleteAccount ? "Excluindo..." : "Excluir conta"}
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
              {isLoadingResetAccount ? "Resetando..." : "Resetar conta"}
            </Button>
          </Card>
        </ContainerCards>
      </ProfileContainer>
    </ResponsiveContainerPage>
  )
}

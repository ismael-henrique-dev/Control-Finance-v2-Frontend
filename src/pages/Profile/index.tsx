import { Lock, Mail, UserRound } from "lucide-react"
import {
  Button,
  Card,
  ContainerButtonsForm,
  ContainerCards,
  ContainerForm,
  ContainerInputs,
  Label,
  ProfileContainer,
} from "./styles"
import { InputFileUpload } from "./InputFileUpload"
import { EditableInput } from "./EditableInput"

const teste = {
  email: "Ismael@gmail.com",
  password: "1234",
  name: "Ismael Henrique Gonçalves",
}

export function Profile() {
  return (
    <ProfileContainer>
      <ContainerForm>
        <InputFileUpload />
        <ContainerInputs>
          <Label>Email</Label>
          <EditableInput
            initialValue={teste.email}
            svgIcon={<Mail />}
            type="email"
          />
          <Label>Senha</Label>
          <EditableInput
            initialValue={teste.password}
            svgIcon={<Lock />}
            type="password"
          />
          <Label>Nome</Label>
          <EditableInput
            initialValue={teste.name}
            svgIcon={<UserRound />}
            type="text"
          />
          <ContainerButtonsForm>
            <Button>Cancelar</Button>
            <Button variant="purple">Alterar dados</Button>
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
          <Button variant="red">Excluir conta</Button>
        </Card>
        <Label>Resetar conta</Label>
        <Card>
          <p>
            Ao reiniciar sua conta, você terá acesso cadastral novamente, no
            entanto, todos os seus dados serão resetados.
          </p>
          <Button variant="purple">Resetar conta</Button>
        </Card>
      </ContainerCards>
    </ProfileContainer>
  )
}

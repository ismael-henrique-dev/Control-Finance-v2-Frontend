import { Lock, Mail, Pencil, UserRound } from "lucide-react"
import {
  Button,
  Card,
  ContainerButtonsForm,
  ContainerCards,
  ContainerForm,
  ContainerInput,
  ContainerInputs,
  ContainerProfile,
  Label,
} from "./styles"
import { InputFileUpload } from "./InputFileUpload"

const teste = {
  email: "Ismael@gmail.com",
  password: "1234",
  name: "Ismael Henrique Gonçalves",
}

export function Profile() {
  return (
    <ContainerProfile>
      <ContainerForm>
        <InputFileUpload />
        <ContainerInputs>
          <Label>Email</Label>
          <ContainerInput>
            <div>
              <Mail />
              <input type="email" value={teste.email} />
            </div>
            <Pencil />
          </ContainerInput>
          <Label>Senha</Label>
          <ContainerInput>
            <div>
              <Lock />
              <input type="password" value={teste.password} />
            </div>
            <Pencil />
          </ContainerInput>
          <Label>Nome</Label>
          <ContainerInput>
            <div>
              <UserRound />
              <input type="text" value={teste.name} />
            </div>
            <Pencil />
          </ContainerInput>
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
    </ContainerProfile>
  )
}

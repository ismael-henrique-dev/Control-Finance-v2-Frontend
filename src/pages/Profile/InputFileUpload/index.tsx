import { Pencil } from "lucide-react"
import { ChangeEvent, useContext, useEffect, useState } from "react"
import { FormContainer, Input, Label, ProfilePic, ImagePreview } from "./styles"
import { api } from "../../../services/api"
import { UserContext } from "../../../contexts/userContext"
import testImage from "../../../assets/test-image.svg"

export function InputFileUpload() {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const { userData } = useContext(UserContext)

  useEffect(() => {
    if (userData && userData.ProfileUrl) {
      setImageUrl(userData.ProfileUrl)
    }
  }, [userData])

  async function uploadImageUpdate(data: FormData) {
    const token = localStorage.getItem("@token")
    try {
      const response = await api.post("/upload/profile", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log("Imagem enviada com sucesso:", response.data)
    } catch (err) {
      console.error("Erro ao enviar a imagem:", err)
    }
  }

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader()
      const file = event.target.files[0]
      const formData = new FormData()
      formData.append("avatar", file) // Nome do campo de acordo com o que o servidor espera

      reader.onload = async (e) => {
        if (e.target && typeof e.target.result === "string") {
          setImageUrl(e.target.result) // Atualiza a URL da imagem
          await uploadImageUpdate(formData) // Faz o upload da nova imagem
        }
      }

      reader.readAsDataURL(file) // Converte a imagem em base64
    }
  }

  return (
    <FormContainer>
      <ProfilePic>
        <ImagePreview src={imageUrl || testImage} alt="Imagem de Perfil" />
        <Input
          type="file"
          id="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }} 
        />
        <Label htmlFor="file">
          <Pencil />
        </Label>
      </ProfilePic>
    </FormContainer>
  )
}

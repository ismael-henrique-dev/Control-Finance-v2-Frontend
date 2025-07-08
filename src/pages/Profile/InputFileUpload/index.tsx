import { Pencil } from 'lucide-react'
import { ChangeEvent, useContext } from 'react'
import { Container, Input, Label, ProfilePic } from './styles'
import { api } from '../../../services/api'
import { UserContext } from '../../../contexts/User/userContext'
import { apiWithToken } from '../../../functions'
import { token } from '../../../constants'
import { Avatar } from '../../../components/ui/Avatar'

export function InputFileUpload() {
  const { userData, setUserData } = useContext(UserContext)

  async function uploadImageUpdate(data: FormData) {
    try {
      await api.post('/upload/profile', data, apiWithToken(token))
    } catch (err) {
      console.error('Erro ao enviar a imagem:', err)
    }
  }

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader()
      const file = event.target.files[0]
      const formData = new FormData()
      formData.append('avatar', file)

      reader.onload = async (e) => {
        if (e.target && typeof e.target.result === 'string') {
          await uploadImageUpdate(formData)
          setUserData({
            ...userData,
            ProfileUrl: e.target.result || '',
            Email: userData?.Email ?? '',
            Id: userData?.Id ?? '',
            Senha: userData?.Senha ?? '',
            UsernName: userData?.UsernName ?? '',
          })
        }
      }

      reader.readAsDataURL(file)
    }
  }

  return (
    <Container>
      <ProfilePic>
        <Avatar variant='big' />
        <Input
          type='file'
          id='file'
          accept='image/*'
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        <Label htmlFor='file'>
          <Pencil />
        </Label>
      </ProfilePic>
    </Container>
  )
}

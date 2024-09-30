import { Pencil } from "lucide-react"
import { ChangeEvent } from "react"
import styled from "styled-components"


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProfilePic = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background-color: #ccc;
  background-size: cover;
  background-position: center;
  position: relative;
`

const Input = styled.input`
  display: none;
`

const Label = styled.label`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.theme.secundary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme.white};
    width: 1rem;
    height: 1rem;
  }
`

export function InputFileUpload() {
  // const [imageUrl, setImageUrl] = useState<string>(initialImage)

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === "string") {
          // setImageUrl(e.target.result)
        }
      }
      reader.readAsDataURL(event.target.files[0])
    }
  }

  return (
    <Container>
      <ProfilePic>
        <Input
          type="file"
          id="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <Label htmlFor="file">
          <Pencil />
        </Label>
      </ProfilePic>
    </Container>
  )
}

import { Plus } from "lucide-react"
import { ContainerButton } from "./styles"

interface ButtonProps {
  handleClick: () => void
}

export function Button({ handleClick }: ButtonProps) {
  return (
    <ContainerButton onClick={handleClick}>
      <Plus size={24} />
    </ContainerButton>
  )
}

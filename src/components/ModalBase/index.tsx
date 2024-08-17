import { ArrowLeft } from "lucide-react"
import {
  MainContainer,
  ModalContainer,
  ModalGlobal,
  ModalHeader,
  SubmitButton,
} from "./styles"
import { ReactNode } from "react"

interface ModalBaseProps {
  submitButtonTitle: string
  children: ReactNode
  open: boolean
  handleClose: () => void
}

export function ModalBase({
  open,
  submitButtonTitle,
  children,
  handleClose,
}: ModalBaseProps) {
  return (
    <ModalGlobal open={open} onClose={handleClose}>
      <ModalContainer>
        <ModalHeader>
          <button onClick={handleClose}>
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>
          <div>
            <label htmlFor="">Valor : </label>
            <input type="text" value="R$ 0,00" />
          </div>
        </ModalHeader>
        <MainContainer>
          {children}
          <SubmitButton>{submitButtonTitle}</SubmitButton>
        </MainContainer>
      </ModalContainer>
    </ModalGlobal>
  )
}

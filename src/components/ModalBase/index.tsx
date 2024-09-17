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
  inputValue?: ReactNode
  submit: () => Promise<void>
}

export interface ModalBasePropsDefault {
  open: boolean
  handleClose: () => void
}

export function ModalBase({
  open,
  submitButtonTitle,
  children,
  handleClose,
  inputValue,
  submit
}: ModalBaseProps) {
  
  return (
    <ModalGlobal open={open} onClose={handleClose}>
      <ModalContainer onSubmit={submit}>
        <ModalHeader>
          <button onClick={handleClose}>
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>
          <div>
            <label htmlFor="">Valor: </label>
            {inputValue}
          </div>
        </ModalHeader>
        <MainContainer>
          {children}
          <SubmitButton type="submit">{submitButtonTitle}</SubmitButton>
        </MainContainer>
      </ModalContainer>
    </ModalGlobal>
  )
}

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
  erros: any
  type?: "createAccount" | 'updatedAccount'
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
  submit,
  erros,
  type
}: ModalBaseProps) {
  
  return (
    <ModalGlobal open={open} onClose={handleClose}>
      <ModalContainer onSubmit={submit}>
        <ModalHeader>
          <button onClick={handleClose}>
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>
          {type === "createAccount" && (
            <div>
              <label htmlFor="">Valor: </label>
              {inputValue}
            </div>
          )}
        </ModalHeader>
        <MainContainer>
          {children}
          <SubmitButton type="submit" disabled={erros}>
            {submitButtonTitle}
          </SubmitButton>
        </MainContainer>
      </ModalContainer>
    </ModalGlobal>
  )
}

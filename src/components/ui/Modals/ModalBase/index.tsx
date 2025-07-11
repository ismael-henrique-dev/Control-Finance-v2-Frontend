import { ArrowLeft } from 'lucide-react'
import {
  MainContainer,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
} from './styles'
import { ReactElement, ReactNode, cloneElement } from 'react'

type ModalBaseProps = {
  children?: ReactNode
  trigger: ReactNode
  title: string
  open: boolean
  handleClose: () => void
}

export function ModalBase({
  title,
  open,
  children,
  trigger,
  handleClose
}: ModalBaseProps) {
  return (
    <>
      {/* Clona o trigger e injeta o onClick */}
      {trigger && trigger}

      <ModalOverlay open={open} onClose={handleClose}>
        <ModalContainer>
          <ModalHeader>
            <button onClick={handleClose}>
              <ArrowLeft size={24} />
              <span>{title}</span>
            </button>
          </ModalHeader>
          <MainContainer>{children}</MainContainer>
        </ModalContainer>
      </ModalOverlay>
    </>
  )
}

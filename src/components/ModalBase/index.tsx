import { ArrowLeft } from "lucide-react";
import { ModalContainer, ModalGlobal, ModalHeader } from "./styles";

interface ModalBaseProps {
  open: boolean
  handleClose?: () => void
}

export function ModalBase({open, handleClose}:ModalBaseProps) {
  return (
    <ModalGlobal open={open} onClose={handleClose}>
      <ModalContainer>
        <ModalHeader>
          <button>
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>
          <div>
            <label htmlFor="">Valor inicial: </label>
            <input type="text" value="R$ 0,00"/>
          </div>
        </ModalHeader>
        <section>
          
        </section>
      </ModalContainer>
    </ModalGlobal>
  )
}
import { ModalBase } from '../ModalBase'

type Props = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  trigger?: React.ReactNode
}

export function CreateTransactionModal({ isOpen, setIsOpen, trigger }: Props) {
  return (
    <ModalBase
      title='Criar transação'
      open={isOpen}
      handleClose={() => setIsOpen(false)}
      trigger={trigger}
    >
      <h1>Teste</h1>
    </ModalBase>
  )
}

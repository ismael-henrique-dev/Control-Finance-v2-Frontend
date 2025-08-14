import { UpdateAccountForm } from '../../Forms/UpdateAccountForm'
import { ModalBase } from '../ModalBase'

type Props = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  trigger?: React.ReactNode
}

export function UpdateAccountModal({ isOpen, setIsOpen, trigger }: Props) {
  return (
    <ModalBase
      title='Atualizar conta'
      open={isOpen}
      handleClose={() => setIsOpen(false)}
      trigger={trigger}
    >
      <UpdateAccountForm />
    </ModalBase>
  )
}

import { CreateAccountForm } from '../../Forms/CreateAccountForm'
import { ModalBase } from '../ModalBase'

type Props = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  trigger?: React.ReactNode
}

export function CreateAccountModal({ isOpen, setIsOpen, trigger }: Props) {
  return (
    <ModalBase
      title='Criar conta'
      open={isOpen}
      handleClose={() => setIsOpen(false)}
      trigger={trigger}
    >
      <CreateAccountForm />
    </ModalBase>
  )
}

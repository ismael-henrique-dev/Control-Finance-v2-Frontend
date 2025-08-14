import { useState } from 'react'
import { Pencil, Settings2, Trash } from 'lucide-react'
import { Actions, Container } from '../../GoalCard/SpeedDial/styles.ts'
import { ButtonAdd } from '../styles.ts'
import { ActionsStyle, PopoverStyle } from './styles.ts'
import Popover from '@mui/material/Popover'
import { deleteAccountById } from '@/services/http/account/DeleteAccount.ts'
import { toast } from 'sonner'
import { getErrorMessage } from '@/utils/GetErrorMessage.ts'
import { useQueryClient } from '@tanstack/react-query'
import { UpdateAccountModal } from '@/components/ui/Modals/UpdateAccountModal.tsx/index.tsx'
import { useSearchParams } from 'react-router-dom'

type AccountOptionsPopoverProps = {
  accountId: string
}

export function AccountOptionsPopover({
  accountId,
}: AccountOptionsPopoverProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const queryClient = useQueryClient()

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [open, setOpen] = useState(false)

  const [openModalEdit, setOpenModalEdit] = useState(false)
  const handleOpenModalEdit = () => setOpenModalEdit(true)
  const handleCloseModaEdit = () => {
    setOpenModalEdit(false)
    handleDeleteParam()
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen((prevOpen) => !prevOpen)
  }

  const handlePopoverClose = () => {
    setOpen(false)
    setAnchorEl(null)
  }


  const handleDeleteParam = () => {
    searchParams.delete('accountId')
    setSearchParams(searchParams)
  }

  const handleOpenModal = () => {
    searchParams.set('accountId', accountId.toString())
    setSearchParams(searchParams)
    handlePopoverClose()
    handleOpenModalEdit()
  }

  const handleDeleteAccount = async () => {
    try {
      await deleteAccountById(accountId)

      queryClient.invalidateQueries({ queryKey: ['accounts'] })

      toast.success('Conta deletada com êxito.')
      handlePopoverClose()
    } catch (error) {
      const errorMessage = getErrorMessage(error)

      toast.error(errorMessage)
    }
  }

  return (
    <Container>
      <ButtonAdd onClick={handleClick}>
        <Settings2 color='#fff' />
      </ButtonAdd>
      <Popover
        id='click-popover'
        sx={PopoverStyle}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Actions style={ActionsStyle}>
          <button onClick={handleOpenModal}>
            <Pencil />
          </button>
          <button onClick={handleDeleteAccount}>
            <Trash />
          </button>
        </Actions>
      </Popover>
      <UpdateAccountModal
        isOpen={openModalEdit}
        setIsOpen={handleCloseModaEdit}
      />
    </Container>
  )
}

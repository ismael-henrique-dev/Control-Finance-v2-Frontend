import { useContext, useState } from "react"
import { TransactionsContext } from "../../../../contexts/transactionsContext"
import { MoreHorizontal, Pencil, Trash } from "lucide-react"
import { EditTransactionModal } from "../EditTransactionModal"
import Popover from "@mui/material/Popover"
import { Actions, Container, PopoverStyle } from "./styles"
import { Button } from "../styles"

type TransactionId = { transactionId: string }

export function MenuOptionsTable({ transactionId }: TransactionId) {
  const { deleteTransaction } = useContext(TransactionsContext)

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [open, setOpen] = useState(false)

  const [openModalEdit, setOpenModalEdit] = useState(false)
  const handleOpenModalEdit = () => setOpenModalEdit(true)
  const handleCloseModaEdit = () => setOpenModalEdit(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen((prevOpen) => !prevOpen)
  }

  const handlePopoverClose = () => {
    setOpen(false)
    setAnchorEl(null)
  }

  const handleClickEditTransaction = () => {
    handlePopoverClose()
    handleOpenModalEdit()
  }

  async function handleDeleteTransaction() {
    await deleteTransaction(transactionId)
  }

  const handleClickDeleteTransaction = () => {
    handleDeleteTransaction()
    handlePopoverClose()
  }

  return (
    <Container>
      <Button variant="more" onClick={handleClick}>
        <MoreHorizontal />
      </Button>
      <Popover
        id="click-popover"
        sx={PopoverStyle}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Actions>
          <button onClick={handleClickEditTransaction}>
            <Pencil />
          </button>
          <button onClick={handleClickDeleteTransaction}>
            <Trash color="#DC2626" />
          </button>
        </Actions>
      </Popover>
      <EditTransactionModal
        open={openModalEdit}
        handleClose={handleCloseModaEdit}
        transactionId={transactionId}
      />
    </Container>
  )
}

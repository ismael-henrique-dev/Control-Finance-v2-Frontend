import Popover from "@mui/material/Popover"
import { Actions, Container } from "./styles"
import { MoreHorizontal, Pencil, Trash } from "lucide-react"
import React, { useContext, useState } from "react"
import { Button } from "../styles"
import { NewTransactionModal } from "../../../../components/NewTransactionModal"
import { TransactionsContext } from "../../../../contexts/transactionsContext"

type TransactionId = { transactionId: string }

export function MenuOptionsTable({ transactionId }: TransactionId) {
  const {deleteTransaction} = useContext(TransactionsContext)

  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null)
  const [open, setOpen] = React.useState(false)

  const [openModalEdit, setOpenModalEdit] = useState(false)
  const handleOpenModalEdit = () => setOpenModalEdit(true)
  const handleCloseModaEdit = () => setOpenModalEdit(false)

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
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
        sx={{
          pointerEvents: "auto",
          ".MuiPopover-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "none",
          },
        }}
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
      <NewTransactionModal
        open={openModalEdit}
        handleClose={handleCloseModaEdit}
      />
    </Container>
  )
}

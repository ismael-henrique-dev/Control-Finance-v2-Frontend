import Popover from "@mui/material/Popover"
import { Actions, Container } from "./styles"
import { MoreHorizontal, Pencil, Trash } from "lucide-react"
import React, { useState } from "react"
import { Button } from "../styles"
import { NewTransactionModal } from "../../../../components/NewTransactionModal"

export function MenuOptionsTable() {
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
          <button onClick={handlePopoverClose}>
            <Trash color="#DC2626" />
          </button>
        </Actions>
      </Popover>
      <NewTransactionModal open={openModalEdit} handleClose={handleCloseModaEdit} />
    </Container>
  )
}

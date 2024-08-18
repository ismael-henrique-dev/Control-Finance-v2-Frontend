import * as React from "react"
import Popover from "@mui/material/Popover"
import {
  CircleCheckBig,
  CirclePlus,
  EllipsisVertical,
  Pencil,
  Trash2,
} from "lucide-react"
import { Actions, Container } from "./styles"
import { GoalCardProps } from ".."
import { NewDepositOfGoal } from "../../../../pages/Goals/NewDepositOfGoal"
import { useState } from "react"
import { GoalModal } from "../../../../pages/Goals/NewGoalModal"

export function ClickPopover({ isGoalsPage }: GoalCardProps) {
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null)
  const [open, setOpen] = React.useState(false)

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

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

  const handleClickAddNewDepositButton = () => {
    handlePopoverClose()
    handleOpenModal()
  }

  const handleClickEditGoal = () => {
    handlePopoverClose()
    handleOpenModalEdit()
  }

  return (
    <Container>
      <EllipsisVertical onClick={handleClick} />
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
          {isGoalsPage && (
            <button onClick={handleClickEditGoal}>
              <Pencil />
            </button>
          )}
          {isGoalsPage && (
            <button onClick={handlePopoverClose}>
              <Trash2 />
            </button>
          )}
          <button onClick={handlePopoverClose}>
            <CircleCheckBig />
          </button>
          <button onClick={handleClickAddNewDepositButton}>
            <CirclePlus />
          </button>
        </Actions>
      </Popover>
      <NewDepositOfGoal open={openModal} handleClose={handleCloseModal} />
      <GoalModal open={openModalEdit} handleClose={handleCloseModaEdit} />
    </Container>
  )
}

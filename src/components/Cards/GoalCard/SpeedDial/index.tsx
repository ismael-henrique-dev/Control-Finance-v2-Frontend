import Popover from "@mui/material/Popover"
import { useState } from "react"
import { GoalCardProps } from ".."
import { NewDepositOfGoal } from "../../../../pages/Goals/NewDepositOfGoal"
import { GoalModal } from "../../../../pages/Goals/NewGoalModal"
import {
  CircleCheckBig,
  CirclePlus,
  EllipsisVertical,
  Pencil,
  Trash2,
} from "lucide-react"
import { Actions, Container, PopoverStyle } from "./styles"

export function ClickPopover({ isGoalsPage }: GoalCardProps) {
  const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null)
  const [openPopover, setOpenPopover] = useState(false)

  const [openNewDepositOfGoalModal, setOpenNewDepositOfGoalModal] =
    useState(false)
  const handleOpenNewDepositOfGoalModal = () =>
    setOpenNewDepositOfGoalModal(true)
  const handleCloseNewDepositOfGoalModal = () =>
    setOpenNewDepositOfGoalModal(false)

  const [openModalEdit, setOpenModalEdit] = useState(false)
  const handleOpenModalEdit = () => setOpenModalEdit(true)
  const handleCloseModaEdit = () => setOpenModalEdit(false)

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget)
    setOpenPopover((prevOpen) => !prevOpen)
  }

  const handlePopoverClose = () => {
    setOpenPopover(false)
    setAnchorEl(null)
  }

  const handleClickNewDepositOfGoal = () => {
    handlePopoverClose()
    handleOpenNewDepositOfGoalModal()
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
        sx={PopoverStyle}
        open={openPopover}
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
          <button onClick={handleClickNewDepositOfGoal}>
            <CirclePlus />
          </button>
        </Actions>
      </Popover>
      <NewDepositOfGoal
        open={openNewDepositOfGoalModal}
        handleClose={handleCloseNewDepositOfGoalModal}
      />
      <GoalModal open={openModalEdit} handleClose={handleCloseModaEdit} />
    </Container>
  )
}

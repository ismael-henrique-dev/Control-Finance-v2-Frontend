import { useContext, useState } from "react"
import {
  CircleCheckBig,
  CirclePlus,
  EllipsisVertical,
  Pencil,
  Trash2,
} from "lucide-react"
import { Actions, Container, PopoverStyle } from "./styles"
import { NewDepositOfGoalModal } from "../../../../pages/Goals/NewDepositOfGoalModal"
import Popover from "@mui/material/Popover"
import { GoalsContext } from "../../../../contexts/goalsContext"
import { EditGoalModal } from "../../../../pages/Goals/EditGoalModal"

interface MoreGoalOptionProps {
  isGoalsPage: boolean
  goalId: string
}

export function MoreGoalOption({ isGoalsPage, goalId }: MoreGoalOptionProps) {
  const { completeGoal, deleteGoal } = useContext(GoalsContext)

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

  const handleCompleteGoal = async () => {
    await completeGoal(goalId)
    handlePopoverClose()
  }

  const handleDeleteGoal = async () => {
    await deleteGoal(goalId)
    handlePopoverClose()
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
            <button onClick={handleDeleteGoal}>
              <Trash2 />
            </button>
          )}
          <button onClick={handleCompleteGoal}>
            <CircleCheckBig />
          </button>
          <button onClick={handleClickNewDepositOfGoal}>
            <CirclePlus />
          </button>
        </Actions>
      </Popover>
      <NewDepositOfGoalModal
        open={openNewDepositOfGoalModal}
        handleClose={handleCloseNewDepositOfGoalModal}
        goalId={goalId}
      />
      <EditGoalModal open={openModalEdit} handleClose={handleCloseModaEdit} goalId={goalId} />
    </Container>
  )
}

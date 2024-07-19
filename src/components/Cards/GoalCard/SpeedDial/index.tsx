import * as React from "react"
import Popover from "@mui/material/Popover"
import {
  CircleCheckBig,
  CirclePlus,
  EllipsisVertical,
  Pencil,
  Trash2,
  X,
} from "lucide-react"
import { Actions, Container } from "./styles"
import { MouseOverProps } from ".."

export function MouseOverPopover({ isGoalsPage }: MouseOverProps) {
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null)
  const [open, setOpen] = React.useState(false)

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen((prevOpen) => !prevOpen)
  }

  const handlePopoverClose = () => {
    setOpen(false)
    setAnchorEl(null)
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
            <button onClick={handlePopoverClose}>
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
          <button onClick={handlePopoverClose}>
            <CirclePlus />
          </button>
        </Actions>
      </Popover>
    </Container>
  )
}

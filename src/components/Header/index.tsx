import { CircleUserRound, Search, Sun } from "lucide-react"
import {
  ActionsContainer,
  HeaderContainer,
  InputArea,
  LeftContainer,
} from "./styles"
import logo from "../../assets/logo-white.svg"
import { NavLink } from "react-router-dom"
import { DrawerBasic } from "./Drawer"
import { SearchBarArea } from "./SearchBarArea"
import { useState } from "react"

export function Header() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <HeaderContainer>
      <LeftContainer>
        <DrawerBasic />
        <img src={logo} />
      </LeftContainer>
      <InputArea onClick={handleOpen}>
        <Search />
        <div>
          <span>Pesquisar</span>
        </div>
      </InputArea>
      <ActionsContainer>
        <button onClick={handleOpen}>
          <Search />
        </button>
        <button>
          <Sun />
        </button>
        <NavLink to="/profile">
          <CircleUserRound />
          <span>Preferências da conta</span>
        </NavLink>
      </ActionsContainer>

      <SearchBarArea open={open} handleClose={handleClose} />
    </HeaderContainer>
  )
}

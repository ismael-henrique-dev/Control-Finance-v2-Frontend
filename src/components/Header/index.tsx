import { CircleUserRound, Menu, Search, Sun } from "lucide-react"
import { ActionsContainer, HeaderContainer, InputArea, LeftContainer } from "./styles"
import logo from "../../assets/logo-white.svg"
import { NavLink } from "react-router-dom"
import { DrawerBasic } from "./Drawer"

export function Header() {
  return (
    <HeaderContainer>
      <LeftContainer>
        <DrawerBasic />
        <img src={logo} />
      </LeftContainer>
      <InputArea>
        <Search />
        <input type="search" placeholder="Pesquisar"/>
      </InputArea>
      <ActionsContainer>
        <button>
          <Sun />
        </button>
        <NavLink to="/">
          <CircleUserRound />
          Preferências da conta
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}

import { CircleUserRound, Search, Sun } from "lucide-react"
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
        <input type="search" placeholder="Pesquisar" />
      </InputArea>
      <ActionsContainer>
        <button>
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
    </HeaderContainer>
  )
}

import { CircleUserRound, Menu, Search, Sun } from "lucide-react"
import { HeaderContainer } from "./styles"
import logo from "../../assets/logo-white.svg"
import { NavLink } from "react-router-dom"
import { DrawerBasic } from "./Drawer"
export function Header() {
  return (
    <HeaderContainer>
      <DrawerBasic />
      <img src={logo} />
      <div>
        <Search />
        <input type="search" />
      </div>
      <button>
        <Sun />
      </button>
      <NavLink to="/">
        <CircleUserRound />
        Preferências da conta
      </NavLink>
    </HeaderContainer>
  )
}

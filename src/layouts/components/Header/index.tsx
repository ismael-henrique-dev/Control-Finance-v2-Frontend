import { CircleUserRound, Moon, Search, Sun } from "lucide-react"
import { NavLink } from "react-router-dom"
import { DrawerBasic } from "./Drawer"
import { SearchBarArea } from "./SearchBarArea"
import { useContext, useState } from "react"
import { ThemeContext } from "../../../contexts/Theme/styledThemeContext"
import logoWhite from "../../../assets/logo-white.svg"
import logoDark from "../../../assets/logo-dark.svg"
import {
  ActionsContainer,
  HeaderContainer,
  InputArea,
  LeftContainer,
} from "./styles"

export function Header() {
  const themeContext = useContext(ThemeContext)
  const { theme, toggleTheme } = themeContext

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)

  return (
    <HeaderContainer>
      <LeftContainer>
        <DrawerBasic />
        <img src={theme === "light" ? logoWhite : logoDark} />
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
        <button onClick={toggleTheme}>
          {theme === "light" ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <NavLink to="/profile">
          <CircleUserRound />
          <span>Preferências da conta</span>
        </NavLink>
      </ActionsContainer>

      <SearchBarArea open={open} setClose={setOpen} />
    </HeaderContainer>
  )
}

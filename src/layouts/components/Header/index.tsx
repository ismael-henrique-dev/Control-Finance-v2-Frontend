import { Moon, Search, Sun } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { DrawerBasic } from './Drawer'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../../contexts/Theme/styledThemeContext'
import logoWhite from '../../../assets/logo-white.svg'
import logoDark from '../../../assets/logo-dark.svg'
import {
  ActionsContainer,
  HeaderContainer,
  LeftContainer,
} from './styles'
import { Avatar } from '../../../components/ui/Avatar'
import { CommandMenu } from './CommandMenu'

export function Header() {
  const [open, setOpen] = useState(false)
  const themeContext = useContext(ThemeContext)
  const { theme, toggleTheme } = themeContext

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <HeaderContainer>
      <LeftContainer>
        <DrawerBasic />
        <NavLink to={{ pathname: '/' }}>
          <img src={theme === 'light' ? logoWhite : logoDark} />
        </NavLink>
      </LeftContainer>
      <CommandMenu
        isOpen={open}
        openCommandMenu={handleOpen}
        closeCommandMenu={handleClose}
      />
      <ActionsContainer>
        <button onClick={handleOpen}>
          <Search />
        </button>
        <button onClick={toggleTheme}>
          {theme === 'light' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <NavLink to='/profile'>
          <Avatar variant='small' />
          <span>Preferências da conta</span>
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}

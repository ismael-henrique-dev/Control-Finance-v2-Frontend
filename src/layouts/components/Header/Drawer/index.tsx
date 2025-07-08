import { useContext, useState } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import {
  ArrowRightLeft,
  BarChart,
  Goal,
  LogOut,
  Menu,
  PieChart,
  PiggyBank,
} from 'lucide-react'
import { ContainerDrawer, ListContainer, PresentationSection } from './styles'
import { UserContext } from '../../../../contexts/User/userContext'
import Drawer from '@mui/material/Drawer'
import ListItem from '@mui/material/ListItem'
import Box from '@mui/material/Box'
import { darkTheme } from '../../../../styles/themes/dark'
import { ThemeContext } from '../../../../contexts'
import { lightTheme } from '../../../../styles/themes/light'
import { Avatar } from '../../../../components/ui/Avatar'

function LinkCustom({ ...props }: NavLinkProps) {
  const themeContext = useContext(ThemeContext)
  const { theme } = themeContext

  return (
    <NavLink
      {...props}
      style={({ isActive, isPending }) => ({
        color: isActive
          ? darkTheme.secundary
          : isPending
          ? 'blue'
          : theme === 'dark'
          ? darkTheme.white
          : lightTheme.text,
      })}
    />
  )
}

export function DrawerBasic() {
  const [open, setOpen] = useState(false)
  const { userData, userLogout } = useContext(UserContext)

  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setOpen(inOpen)
    }

  return (
    <Box sx={{ display: 'flex' }}>
      <Menu onClick={toggleDrawer(true)} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <ContainerDrawer
          role='menu'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div>
            <PresentationSection>
              <Avatar variant='big' />
              <span>Bem-vindo(a) novamente!</span>
              <strong>
                {!userData?.UsernName ? 'Carregando...' : userData.UsernName}
              </strong>
            </PresentationSection>
            <ListContainer>
              <ListItem>
                <PieChart />
                <LinkCustom to={'/'}>Dashboard</LinkCustom>
              </ListItem>
              <ListItem>
                <ArrowRightLeft />
                <LinkCustom to={'/transacoes'}>Transações</LinkCustom>
              </ListItem>
              <ListItem>
                <PiggyBank />
                <LinkCustom to={'/contas'}>Contas</LinkCustom>
              </ListItem>
              <ListItem>
                <BarChart />
                <LinkCustom to={'/rendimento'}>Rendimento</LinkCustom>
              </ListItem>
              <ListItem>
                <Goal />
                <LinkCustom to={'/metas'}>Metas</LinkCustom>
              </ListItem>
            </ListContainer>
          </div>
          <button onClick={userLogout}>
            <LogOut />
            <span>Log-out</span>
          </button>
        </ContainerDrawer>
      </Drawer>
    </Box>
  )
}

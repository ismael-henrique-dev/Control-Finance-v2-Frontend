import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
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
import testImage from '../../../../assets/test-image.svg'
import { darkTheme } from '../../../../styles/themes/dark'

export function DrawerBasic() {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState<string | null>(null)
  const { userData, userLogout } = useContext(UserContext)

  useEffect(() => {
    if (userData && userData.ProfileUrl) {
      setImage(userData.ProfileUrl)
    } else {
      setImage(testImage)
    }
  }, [userData])

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
              <img src={image || testImage} />
              <span>Bem-vindo(a) novamente!</span>
              <strong>
                {!userData?.UsernName ? 'Carregando...' : userData.UsernName}
              </strong>
            </PresentationSection>
            <ListContainer>
              <ListItem>
                <PieChart />
                <NavLink
                  to='/'
                  style={({ isActive, isPending }) => ({
                    color: isActive
                      ? darkTheme.primary
                      : isPending
                      ? 'blue'
                      : '#fff',
                  })}
                >
                  Dashboard
                </NavLink>
              </ListItem>
              <ListItem>
                <ArrowRightLeft />
                <NavLink
                  to='/transacoes'
                  style={({ isActive, isPending }) => ({
                    color: isActive
                      ? darkTheme.primary
                      : isPending
                      ? 'blue'
                      : '#fff',
                  })}
                >
                  Transações
                </NavLink>
              </ListItem>
              <ListItem>
                <PiggyBank />
                <NavLink
                  to='/contas'
                  style={({ isActive, isPending }) => ({
                    color: isActive
                      ? darkTheme.primary
                      : isPending
                      ? 'blue'
                      : '#fff',
                  })}
                >
                  Contas
                </NavLink>
              </ListItem>
              <ListItem>
                <BarChart />
                <NavLink
                  to='/rendimento'
                  style={({ isActive, isPending }) => ({
                    color: isActive
                      ? darkTheme.primary
                      : isPending
                      ? 'blue'
                      : '#fff',
                  })}
                >
                  Rendimento
                </NavLink>
              </ListItem>
              <ListItem>
                <Goal />
                <NavLink
                  to='/metas'
                  style={({ isActive, isPending }) => ({
                    color: isActive
                      ? darkTheme.primary
                      : isPending
                      ? 'blue'
                      : '#fff',
                  })}
                >
                  Metas
                </NavLink>
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

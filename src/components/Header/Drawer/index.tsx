import Drawer from "@mui/material/Drawer"
import ListItem from "@mui/material/ListItem"
import {
  ArrowRightLeft,
  BarChart,
  Goal,
  LogOut,
  Menu,
  PieChart,
  PiggyBank,
} from "lucide-react"
import { useState } from "react"
import { ContainerDrawer, ListContainer, PresentationSection } from "./styles"

import testImage from "../../../assets/test-image.svg"
import Box from "@mui/material/Box"
import { NavLink } from "react-router-dom"

export function DrawerBasic() {
  const [open, setOpen] = useState(false)

  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setOpen(inOpen)
    }

  return (
    <Box sx={{ display: "flex" }}>
      <Menu onClick={toggleDrawer(true)} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <ContainerDrawer
          role="menu"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <PresentationSection>
            <img src={testImage} />
            <span>Bem-vindo(a) novamente!</span>
            <strong>Ismael Henrique</strong>
          </PresentationSection>
          <ListContainer>
            <ListItem>
              <PieChart />
              <NavLink to="/">Dashboard</NavLink>
            </ListItem>
            <ListItem>
              <ArrowRightLeft />
              <NavLink to="/transacoes">Transações</NavLink>
            </ListItem>
            <ListItem>
              <PiggyBank />
              <NavLink to="/contas">Contas</NavLink>
            </ListItem>
            <ListItem>
              <BarChart />
              <NavLink to="/rendimento">Rendimento</NavLink>
            </ListItem>
            <ListItem>
              <Goal />
              <NavLink to="/metas">Metas</NavLink>
            </ListItem>
            <ListItem>
              <LogOut />
              <NavLink to="/singUp">Log-out</NavLink>
            </ListItem>
          </ListContainer>
        </ContainerDrawer>
      </Drawer>
    </Box>
  )
}

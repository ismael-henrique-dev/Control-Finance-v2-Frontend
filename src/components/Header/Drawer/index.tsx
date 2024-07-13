import Drawer from "@mui/material/Drawer"
import ListItem from "@mui/material/ListItem"
import { Menu } from "lucide-react"
import { useState } from "react"
import { ContainerDrawer, ListContainer, PresentationSection } from "./styles"

import testImage from "../../../assets/test-image.svg"
import  Box  from "@mui/material/Box"
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
              <NavLink to="/">Dashboard</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/transacoes">Transações</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/contas">Contas</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/rendimento">Rendimento</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/metas">Metas</NavLink>
            </ListItem>
          </ListContainer>
        </ContainerDrawer>
      </Drawer>
    </Box>
  )
}

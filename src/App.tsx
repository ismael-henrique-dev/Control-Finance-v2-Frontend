import { ThemeProvider } from "styled-components"
import { Login } from "./pages/Login"
import { GlobalStyle } from "./styles/global"
import { useState } from "react"

import dark from "./styles/themes/dark"
import light from "./styles/themes/light"

export function App() {
  const [theme, setTheme] = useState(light)

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light)
  }

  const themeSelectedCheckbox = theme.title === "dark"

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={themeSelectedCheckbox}
        />
        <Login />
      </div>
    </ThemeProvider>
  )
}

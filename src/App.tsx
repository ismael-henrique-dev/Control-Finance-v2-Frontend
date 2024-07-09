import { ThemeProvider } from "styled-components"
import { Login } from "./pages/Login"
import { GlobalStyle } from "./styles/global"
import { useEffect, useState } from "react"

import dark from "./styles/themes/dark"
import light from "./styles/themes/light"
import { BrowserRouter } from "react-router-dom"

export function App() {
  const [theme, setTheme] = useState(() => {
    const storedValueTheme = localStorage.getItem("theme")

    if (storedValueTheme) {
      return JSON.parse(storedValueTheme)
    } else {
      return light
    }
  })

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light)
  }

  const themeSelectedCheckbox = theme.title === "dark"

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <div>
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={themeSelectedCheckbox}
          />
          <button>{theme.title === "light" ? "light" : "dark"}</button>
          <Login />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

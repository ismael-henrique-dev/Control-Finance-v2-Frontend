// App.tsx
import { useContext } from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { ThemeProvider, ThemeContext } from "./contexts/styledThemeContext"
import { GlobalStyle } from "./styles/global"
import { lightTheme } from "./styles/themes/light"
import { darkTheme } from "./styles/themes/dark"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

function App() {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error("Default value underfined")
  }

  const { theme } = themeContext

  // colocar o current theme para que ele não deixe como string
  const currentTheme = theme === "light" ? lightTheme : darkTheme

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </StyledThemeProvider>
  )
}

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
)

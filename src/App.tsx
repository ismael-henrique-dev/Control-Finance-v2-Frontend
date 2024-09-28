import { useContext } from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { ThemeProvider, ThemeContext } from "./contexts/styledThemeContext"
import { GlobalStyle } from "./styles/global"
import { lightTheme } from "./styles/themes/light"
import { darkTheme } from "./styles/themes/dark"
import { BrowserRouter } from "react-router-dom"
import { UseProvider } from "./contexts/userContext"
import { AccountsProvider } from "./contexts/accountsContext"
import { TransactionsProvider } from "./contexts/transactionsContext"
import { Router } from "./routes/Router"

function App() {
  const { theme } = useContext(ThemeContext)
  const currentTheme = theme === "light" ? lightTheme : darkTheme

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Router />
    </StyledThemeProvider>
  )
}

export default function MainApp() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <UseProvider>
          <AccountsProvider>
            <TransactionsProvider>
              <App />
            </TransactionsProvider>
          </AccountsProvider>
        </UseProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

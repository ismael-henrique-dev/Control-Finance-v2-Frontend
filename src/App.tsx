// App.tsx
import { useContext } from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { ThemeProvider, ThemeContext } from "./contexts/styledThemeContext"
import { GlobalStyle } from "./styles/global"
import { lightTheme } from "./styles/themes/light"
import { darkTheme } from "./styles/themes/dark"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { UseProvider } from "./contexts/userContext"
import { AccountsProvider } from "./contexts/accountsContext"
import { TransactionsProvider } from "./contexts/transactionsContext"

// eslint-disable-next-line react-refresh/only-export-components
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

// Export default with Providers
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

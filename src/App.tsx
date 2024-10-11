import { useContext } from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { lightTheme } from "./styles/themes/light"
import { darkTheme } from "./styles/themes/dark"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes/Router"
import {
  ThemeProvider,
  ThemeContext,
  AccountsProvider,
  TransactionsProvider,
  GoalsProvider,
  UseProvider,
} from "./contexts"

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
        <AccountsProvider>
          <TransactionsProvider>
            <GoalsProvider>
              <UseProvider>
                <App />
              </UseProvider>
            </GoalsProvider>
          </TransactionsProvider>
        </AccountsProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

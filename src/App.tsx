import { useContext } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'
import { darkTheme } from './styles/themes/dark'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import {
  ThemeProvider,
  ThemeContext,
  AccountsProvider,
  TransactionsProvider,
  GoalsProvider,
  UseProvider,
} from './contexts'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {
  const { theme } = useContext(ThemeContext)
  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Router />
    </StyledThemeProvider>
  )
}

const clientID =
  '400143903483-lenkce076k19ikl97v5d1hb4isb011rd.apps.googleusercontent.com'

export default function MainApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <AccountsProvider>
            <TransactionsProvider>
              <GoalsProvider>
                <UseProvider>
                  <GoogleOAuthProvider clientId={clientID}>
                    <App />
                  </GoogleOAuthProvider>
                </UseProvider>
              </GoalsProvider>
            </TransactionsProvider>
          </AccountsProvider>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

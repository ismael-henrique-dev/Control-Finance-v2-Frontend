import { createContext, ReactNode, useEffect, useState } from "react"
import light from "../styles/themes/light"
import dark from "../styles/themes/dark"
import { DefaultTheme } from "styled-components"

interface StyledThemeContextType {
  theme: DefaultTheme
  toggleTheme: () => void
}

export const StyledThemeContext = createContext({} as StyledThemeContextType)

interface StyledThemeProviderProps {
  children: ReactNode
}

export function StyledThemeProvider({ children }: StyledThemeProviderProps) {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
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

  // const themeSelectedCheckbox = theme.title === "dark"

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <StyledThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </StyledThemeContext.Provider>
  )
}

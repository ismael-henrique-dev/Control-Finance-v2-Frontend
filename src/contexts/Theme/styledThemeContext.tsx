import { createContext, useState, useEffect, ReactNode } from "react"

interface ThemeContextType {
  theme: "light" | "dark"
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const storedTheme = localStorage.getItem("theme") as "dark" | "light" | null //indica uma dessas três opções, porque se não o ts não comprrende

    return storedTheme || "light"
  })

  const toggleTheme = () => {
    setTheme((state) => (state === "light" ? "dark" : "light"))
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

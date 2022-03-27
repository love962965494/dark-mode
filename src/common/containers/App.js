import React, { createContext } from 'react'
import useTheme from '../hooks/useTheme'

export const ThemeContext = createContext()

export default function App({ children }) {
  const { theme, changeTheme } = useTheme()

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>
}

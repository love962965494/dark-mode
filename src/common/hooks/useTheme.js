import { useState, useEffect } from 'react'

export default function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    const initTheme = localStorage.getItem('theme')

    if (initTheme === 'dark') {
      document.documentElement.classList.add('dark-mode')
    }
  }, [])

  const changeTheme = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light'

    setTheme(currentTheme)
    document.documentElement.classList.toggle('dark-mode')
    localStorage.setItem('theme', currentTheme)
  }

  return {
    theme,
    changeTheme,
  }
}

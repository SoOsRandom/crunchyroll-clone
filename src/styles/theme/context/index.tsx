import { DefaultTheme, ThemeProvider as ThemeProviderStyledComponents } from 'styled-components'
import { ThemeContextProps, ThemeNameType, ThemeProps } from './types'
import * as themes from 'styles/theme'
import { useCallback, useEffect, useState } from 'react'
import { createContext } from 'react'

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [themeName, setThemeName] = useState<ThemeNameType>()
  const [themeObject, setThemeObject] = useState<DefaultTheme>(themes['defaultTheme'])

  const getThemeFromLocalStorage = useCallback(() => {
    const themeStorage = localStorage.getItem('theme') as ThemeNameType

    setThemeName(themeStorage ?? 'defaultTheme')
    setThemeObject(themes[themeStorage ?? 'defaultTheme'] as DefaultTheme)
  }, [])

  useEffect(() => {
    if (window) {
      if (!themeName) {
        getThemeFromLocalStorage()
      } else if (themes[themeName] != themeObject) {
        setThemeObject(themes[themeName] as DefaultTheme)
        localStorage.setItem('theme', themeName)
      }
    }
  }, [getThemeFromLocalStorage, themeName, themeObject])

  return (
    <ThemeContext.Provider
      value={{
        theme: themeObject,
        setTheme: setThemeName
      }}
    >
      <ThemeProviderStyledComponents theme={themeObject}>{children}</ThemeProviderStyledComponents>
    </ThemeContext.Provider>
  )
}

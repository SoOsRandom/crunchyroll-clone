import { SetStateAction } from 'react'
import { DefaultTheme } from 'styled-components'

export type ThemeNameType = 'defaultTheme' | 'darkTheme'

export interface ThemeProps {
  children: React.ReactNode
}

export interface ThemeContextProps {
  theme: DefaultTheme
  setTheme: React.Dispatch<SetStateAction<ThemeNameType | undefined>>
}

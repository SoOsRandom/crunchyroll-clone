import * as icons from 'icons'
import { useContext } from 'react'
import { ThemeContext } from 'styles/theme/context'
import { IconProps } from './types'

export function Icon({ name, size, color }: IconProps) {
  const { theme } = useContext(ThemeContext)
  return <>{icons[name]({ size, color: color ?? theme.colors.brand.supportSecondary })}</>
}

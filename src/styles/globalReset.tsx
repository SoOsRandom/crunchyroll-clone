import { createGlobalStyle, css } from 'styled-components'

export const GlobalReset = createGlobalStyle(
  ({ theme }) => css`
    body {
      background-color: ${theme.colors.brand.primary};
    }
  `
)

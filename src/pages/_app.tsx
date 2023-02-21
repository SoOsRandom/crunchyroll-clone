import type { AppProps } from 'next/app'
import { GlobalReset } from 'styles/globalReset'
import { ThemeProvider } from 'styles/theme/context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

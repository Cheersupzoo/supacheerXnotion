import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Script strategy='beforeInteractive' id='dark-mode-script'>{`
  const isDark =
    localStorage?.getItem('darkMode') === 'true' ??
    window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.add(isDark ? 'dark-mode' : 'light-mode')
`}</Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

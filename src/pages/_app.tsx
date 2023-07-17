// core styles shared by all of react-notion-x (required)
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
import posthog from 'posthog-js'
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-coy.css'
import 'react-notion-x/src/styles.css'
import 'styles/global.css'
// this might be better for dark mode
// import 'prismjs/themes/prism-okaidia.css'
// global style overrides for notion
import 'styles/notion.css'
// global style overrides for prism theme (optional)
import 'styles/prism-theme.css'
import 'styles/theme.css'

if (typeof window !== 'undefined') {
  const isDark =
    localStorage?.getItem('darkMode') === 'true' ??
    window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.add(isDark ? 'dark-mode' : 'light-mode')
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return

    function onRouteChangeComplete() {
      posthog.capture('$pageview')
    }

    posthog.init('phc_z2lv4tGxD4PeSIzFHY24YrJvHgzLz9hdm3vKffbi5Hh', {
      api_host: 'https://app.posthog.com',
      persistence: 'memory'
    })

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events])
  return <Component {...pageProps} />
}

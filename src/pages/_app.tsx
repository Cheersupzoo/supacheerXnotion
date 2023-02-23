// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-coy.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
import { AppProps } from 'next/app'
import 'styles/global.css'
// this might be better for dark mode
// import 'prismjs/themes/prism-okaidia.css'
// global style overrides for notion
import 'styles/notion.css'
// global style overrides for prism theme (optional)
import 'styles/prism-theme.css'
import posthog from 'posthog-js'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    function onRouteChangeComplete() {
      posthog.capture('$pageview')
    }

    posthog.init('phc_z2lv4tGxD4PeSIzFHY24YrJvHgzLz9hdm3vKffbi5Hh', {
      api_host: 'https://app.posthog.com'
    })

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events])
  return <Component {...pageProps} />
}

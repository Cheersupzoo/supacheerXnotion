import { useCallback, useEffect, useState } from 'react'

import Scene from '@/components/Three'
import { useDarkMode } from '@/lib/use-dark-mode'

export default function Three() {
  const [hasMounted, setHasMounted] = useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const onToggleTheme = useCallback(() => {
    toggleDarkMode()
  }, [toggleDarkMode])

  return (
    <>
      <Scene />
      <button onClick={onToggleTheme}>
        {hasMounted && isDarkMode ? 'Dark' : 'Light'}
      </button>
      <button
        onClick={() => {
          if (
            typeof DeviceMotionEvent !== 'undefined' &&
            //@ts-ignore
            typeof DeviceMotionEvent.requestPermission === 'function'
          ) {
            // (optional) Do something before API request prompt.
            //@ts-ignore
            DeviceMotionEvent.requestPermission().catch(console.error)
          } else {
            alert('DeviceMotionEvent is not defined')
          }
        }}
      >
        permission
      </button>
    </>
  )
}

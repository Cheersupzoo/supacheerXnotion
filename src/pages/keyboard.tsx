import React, { useCallback, useEffect, useState } from 'react'

import { KeyboardLayout } from '@/components/Keyboard'
import { useDarkMode } from '@/lib/use-dark-mode'

export default function Keyboard() {
  const [hasMounted, setHasMounted] = useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const onToggleTheme = useCallback(() => {
    toggleDarkMode()
  }, [toggleDarkMode])

  return (
    <div>
      <KeyboardLayout />
      <button onClick={onToggleTheme}>
        {hasMounted && isDarkMode ? 'Dark' : 'Light'}
      </button>
    </div>
  )
}

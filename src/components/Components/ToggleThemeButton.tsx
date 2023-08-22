import { useCallback, useEffect, useState } from 'react'

import { IoMoonSharp } from 'react-icons/io5'
import { IoSunnyOutline } from 'react-icons/io5'
import { cs } from 'react-notion-x'

import { useDarkMode } from '@/lib/use-dark-mode'

import styles from '../styles.module.css'

export const ToggleThemeButton = () => {
  const [hasMounted, setHasMounted] = useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const onToggleTheme = useCallback(() => {
    toggleDarkMode()
  }, [toggleDarkMode])

  return (
    <div
      className={cs('breadcrumb', 'button', !hasMounted && styles.hidden)}
      onClick={onToggleTheme}
    >
      {hasMounted && isDarkMode ? (
        <IoMoonSharp color='var(--text-color)' />
      ) : (
        <IoSunnyOutline color='var(--text-color)' />
      )}
    </div>
  )
}

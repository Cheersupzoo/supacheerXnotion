import useDarkModeImpl from '@fisch0920/use-dark-mode'

export function useDarkMode() {
  const darkMode = useDarkModeImpl(true, {
    element: typeof window !== 'undefined' ? document.documentElement : undefined,
    classNameDark: 'dark-mode'
  })

  return {
    isDarkMode: darkMode.value,
    toggleDarkMode: darkMode.toggle
  }
}

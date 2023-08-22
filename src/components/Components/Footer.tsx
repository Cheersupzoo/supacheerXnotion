import * as React from 'react'

import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaMedium } from 'react-icons/fa'
import { IoMoonSharp } from 'react-icons/io5'
import { IoSunnyOutline } from 'react-icons/io5'

import { useDarkMode } from '@/lib/use-dark-mode'

import styles from '../styles.module.css'

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const onToggleDarkMode = React.useCallback(
    (e: any) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        © 2023 Suppachai Thanrukprasert. All Rights Reserved.
      </div>

      <div className={styles.settings}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        )}
      </div>

      <div className={styles.social}>
        {true && (
          <a
            className={styles.github}
            href={`https://github.com/Cheersupzoo`}
            title={`GitHub @Cheersupzoo`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        )}

        {true && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/suppachai-thanrukprasert`}
            title={`LinkedIn Suppachai Thanrukprasert`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        )}

        {true && (
          <a
            className={styles.medium}
            href={`https://www.medium.com/@cheersupzoo`}
            title={`Medium @cheersupzoo`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaMedium />
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)

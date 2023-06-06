import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react'

import Reveal from 'reveal.js'

const RevealContext = createContext<{
  reveal: Reveal.Api | undefined
  setReveal: Dispatch<SetStateAction<Reveal.Api | undefined>>
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}>({ reveal: null!, setReveal: null!, setIsLoading: null!, isLoading: true })

export const RevealProvider = ({ children }: any) => {
  const [reveal, setReveal] = useState<Reveal.Api>()
  const [isLoading, setIsLoading] = useState(true)

  return (
    <RevealContext.Provider
      value={{ reveal, setReveal, setIsLoading, isLoading }}
    >
      {children}
    </RevealContext.Provider>
  )
}

export const useReveal = () => useContext(RevealContext)

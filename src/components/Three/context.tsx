import { MutableRefObject, createContext, useContext, useRef } from 'react'

export type ThreeContent = {
  setPosCenter: (x: number, y: number) => void
  posCenterX: MutableRefObject<number>
  posCenterEvents: MutableRefObject<(x: number, y: number) => void>
  lookForward: MutableRefObject<boolean>
}
const ThreeContext = createContext<ThreeContent>({
  setPosCenter: null!,
  posCenterX: null!,
  posCenterEvents: null!,
  lookForward: null!
})

export function ThreeContextProvider({ children }: any) {
  const posCenterEvents = useRef<(x: number, y: number) => void>(null!)
  const posCenterX = useRef(0)
  const setPosCenter = (x: number, y: number) => {
    if (!posCenterEvents.current) return
    // if (!posCenterX.current) return
    posCenterEvents.current(x, y)
    posCenterX.current = x / 300
  }
  const lookForward = useRef(false)

  return (
    <ThreeContext.Provider
      value={{ setPosCenter, posCenterEvents, lookForward, posCenterX }}
    >
      {children}
    </ThreeContext.Provider>
  )
}

export const useThreeContext = () => useContext(ThreeContext)

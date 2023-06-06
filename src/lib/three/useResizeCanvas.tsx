import { useFrame } from '@react-three/fiber'

export const useResizeCanvas = () => {
  useFrame((state) => {
    if (!state.gl.domElement?.parentElement) return

    const { clientWidth, clientHeight } = state.gl.domElement.parentElement

    if (
      state.size.width !== clientWidth ||
      state.size.height !== clientHeight
    ) {
      state.setSize(clientWidth, clientHeight)
    }
  })
}

import { Cylinder, Sphere } from '@react-three/drei'
import { Shape } from 'three'

import { Leg, usePantMaterial } from './Leg'

export function LBody() {
  const material = usePantMaterial()
  const path = new Shape()
  path.absellipse(0, 0, 2, 8, 0, Math.PI * 2, false, 0)
  return (
    <group position={[0, -3, 0]}>
      <Sphere
        position={[0, 0, 0]}
        args={[3]}
        scale={[1, 0.5, 0.6]}
        castShadow
        receiveShadow
      >
        {material}
      </Sphere>
      <Cylinder
        position={[0, -0.5, 0]}
        args={[3, 3, 1]}
        scale={[1, 1, 0.6]}
        castShadow
        receiveShadow
      >
        {material}
      </Cylinder>
      <Sphere
        position={[0, -1, 0]}
        args={[3]}
        scale={[1, 0.5, 0.6]}
        castShadow
        receiveShadow
      >
         {material}
      </Sphere>
      <Leg position={[-1.5, -1, 0]} />
      <Leg position={[1.5, -1, 0]} right />
    </group>
  )
}

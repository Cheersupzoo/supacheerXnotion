import { animated } from '@react-spring/three'
import { Cylinder, Sphere } from '@react-three/drei'
import { Vector3 } from '@react-three/fiber'

import { useShirtMaterial } from './UBody'
import { useArm } from './useArm'

export function Arm({
  position,
  right = false
}: {
  position?: Vector3
  right?: boolean
}) {
  const material = useShirtMaterial()

  const { rotationLowerArm } = useArm(right)

  return (
    <group position={position}>
      <Sphere position={[0, 0, 0]} args={[1]} scale={[1, 1, 1]} castShadow>
        {material}
      </Sphere>
      <group position={[0, 0, 0]}>
        <Cylinder position={[0, -1.5, 0]} args={[1, 1, 3]} castShadow>
          {material}
        </Cylinder>
        <animated.group
          position={[0, -3, 0]}
          rotation={rotationLowerArm as any}
        >
          <Sphere position={[0, 0, 0]} args={[1]} scale={[1, 1, 1]} castShadow>
            {material}
          </Sphere>
          <Cylinder position={[0, -2, 0]} args={[1, 1, 4]} castShadow>
            {material}
          </Cylinder>
          <Sphere
            position={[0, -4, 0]}
            args={[1]}
            scale={[1, -0.3, 1]}
            castShadow
          >
            {material}
          </Sphere>
          <group position={[0, -4, 0]}>
            <Sphere
              name='hand'
              position={[0, -0.7, 0]}
              args={[1]}
              scale={[0.9, 0.7, 0.4]}
              castShadow
            >
              <meshStandardMaterial color={'#fbede4'} />
            </Sphere>
            <group scale={[right ? -1 : 1, 1, 1]}>
              <Sphere
                name='hand1'
                position={[0.7, -1.0, 0]}
                args={[0.5]}
                scale={[0.4, 1, 0.3]}
                rotation={[0, 0, 0.5]}
                castShadow
              >
                <meshStandardMaterial color={'#fbede4'} />
              </Sphere>
              <Sphere
                name='hand2'
                position={[0.3, -1.25, 0]}
                args={[0.5]}
                scale={[0.3, 1, 0.3]}
                castShadow
              >
                <meshStandardMaterial color={'#fbede4'} />
              </Sphere>
              <Sphere
                name='hand3'
                position={[0, -1.4, 0]}
                args={[0.5]}
                scale={[0.3, 1, 0.3]}
                castShadow
              >
                <meshStandardMaterial color={'#fbede4'} />
              </Sphere>
              <Sphere
                name='hand4'
                position={[-0.3, -1.3, 0]}
                args={[0.5]}
                scale={[0.3, 1, 0.3]}
                castShadow
              >
                <meshStandardMaterial color={'#fbede4'} />
              </Sphere>
              <Sphere
                name='hand5'
                position={[-0.6, -1.1, 0]}
                args={[0.5]}
                scale={[0.3, 1, 0.3]}
                castShadow
              >
                <meshStandardMaterial color={'#fbede4'} />
              </Sphere>
            </group>
          </group>
        </animated.group>
      </group>
    </group>
  )
}

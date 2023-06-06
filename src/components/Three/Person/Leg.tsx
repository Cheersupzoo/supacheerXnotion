import { useRef } from 'react'

import {
  Addition,
  Base,
  CSGGeometryRef,
  Geometry,
  Intersection,
  Subtraction
} from '@react-three/csg'
import { Cylinder, Sphere, useTexture } from '@react-three/drei'
import { Vector3 } from '@react-three/fiber'
import { CylinderGeometry, RepeatWrapping, Shape } from 'three'

export function usePantMaterial() {
  // const fabricMetallic = useTexture(
  //   '/texture/nylon-tent-fabric/nylon-tent-fabric_metallic.png'
  // )
  // const fabricAO = useTexture('/texture/nylon-tent-fabric/nylon-tent-ao.png')
  // const fabricRoughness = useTexture(
  //   '/texture/nylon-tent-fabric/nylon-tent-fabric_height.png'
  // )
  // fabricRoughness.repeat.set(3, 3)
  // fabricRoughness.wrapS = RepeatWrapping
  // fabricRoughness.wrapT = RepeatWrapping
  // fabricAO.repeat.set(3, 3)
  // fabricAO.wrapS = RepeatWrapping
  // fabricAO.wrapT = RepeatWrapping
  // fabricMetallic.repeat.set(3, 3)
  // fabricMetallic.wrapS = RepeatWrapping
  // fabricMetallic.wrapT = RepeatWrapping
  const path = new Shape()
  path.absellipse(0, 0, 2, 8, 0, Math.PI * 2, false, 0)

  const material = (
    <meshPhysicalMaterial
      color='#252429'
      // roughnessMap={fabricRoughness}
      roughness={2.5}
      // aoMap={fabricAO}
      aoMapIntensity={0.1}
      // metalnessMap={fabricMetallic}
      metalness={0}
      reflectivity={0.15}
    />
  )

  return material
}

export function Leg({
  position,
  right
}: {
  position?: Vector3
  right?: boolean
}) {
  const material = usePantMaterial()
  const path = new Shape()
  path.absellipse(0, 0, 2, 8, 0, Math.PI * 2, false, 0)
  const legLength = 8
  return (
    <group
      position={position}
      rotation={[-Math.PI / 2 - 0.07, 0, right ? 0.1 : -0.1]}
    >
      <Sphere
        position={[0, 0, 0]}
        args={[1.5]}
        scale={[1, 0.5, 0.8]}
        castShadow
        receiveShadow
      >
        {material}
      </Sphere>
      <group position={[0, 0, 0]}>
        <Cylinder
          position={[0, -legLength / 2, 0]}
          args={[1.5, 1.5, legLength]}
          scale={[1, 1, 0.8]}
          castShadow
          receiveShadow
        >
          {material}
        </Cylinder>
      </group>
      <Sphere
        position={[0, -legLength, 0]}
        args={[1.5]}
        scale={[1, 0.5, 0.8]}
        castShadow
        receiveShadow
      >
        {material}
      </Sphere>
      <Shoe position={[0, -legLength - 0.5, 0]} />
    </group>
  )
}

export function useShoeMaterial() {
  const fabricMetallic = useTexture(
    '/texture/brown-leather/brown-leather_metallic.png'
  )
  const fabricAO = useTexture('/texture/brown-leather/brown-leather_ao.png')
  const fabricRoughness = useTexture(
    '/texture/brown-leather/brown-leather_roughness.png'
  )
  fabricRoughness.repeat.set(3, 3)
  fabricRoughness.wrapS = RepeatWrapping
  fabricRoughness.wrapT = RepeatWrapping
  fabricAO.repeat.set(3, 3)
  fabricAO.wrapS = RepeatWrapping
  fabricAO.wrapT = RepeatWrapping
  fabricMetallic.repeat.set(3, 3)
  fabricMetallic.wrapS = RepeatWrapping
  fabricMetallic.wrapT = RepeatWrapping
  const path = new Shape()
  path.absellipse(0, 0, 2, 8, 0, Math.PI * 2, false, 0)

  const material = (
    <meshPhysicalMaterial
      color='#807e94'
      roughnessMap={fabricRoughness}
      roughness={2.5}
      aoMap={fabricAO}
      aoMapIntensity={0.1}
      metalnessMap={fabricMetallic}
      metalness={0}
      reflectivity={0.15}
    />
  )

  return material
}

const cyl = new CylinderGeometry(1.5, 1.5, 3, 94, 1, false, 0.067)

function Shoe({ position }: { position?: Vector3 }) {
  const material = useShoeMaterial()
  const csg = useRef<CSGGeometryRef>(null!)
  return (
    <group onClick={() => csg.current.update()} position={position}>
      <mesh castShadow receiveShadow>
        {material}
        <Geometry ref={csg} computeVertexNormals>
          <Base
            name='base'
            rotation={[Math.PI / 2, 0, 0]}
            geometry={cyl}
            scale={[1, 1, 0.6]}
            position={[0, 0, 1.5 - 1.2]}
          />

          <Addition position={[0, 0, 1.5 - 1.2 + 1.5]} scale={[1, 0.6, 1]}>
            <sphereBufferGeometry args={[1.5, 84, 47]} />
          </Addition>
          <Subtraction position={[0, -1, 1.2]}>
            <boxBufferGeometry args={[3, 2, 5]} />
          </Subtraction>
          <Addition position={[0, -0.15, 1.5 - 1.2]}>
            <boxBufferGeometry args={[3, 0.3, 3]} />
          </Addition>
          <Intersection position={[0, -0.1, 1.8]} scale={[0.8, 1, 1.02]}>
            <sphereBufferGeometry args={[3, 84, 84]} />
          </Intersection>
          <Addition position={[0, -0.15, 1.5 - 1.2 + 1.5]} scale={[1, 1, 1]}>
            <cylinderBufferGeometry args={[1.5, 1.5, 0.3, 84]} />
          </Addition>
        </Geometry>
      </mesh>
    </group>
  )
}

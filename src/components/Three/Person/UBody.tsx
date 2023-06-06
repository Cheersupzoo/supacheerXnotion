import { Addition, Base, Geometry } from '@react-three/csg'
// import { useTexture } from '@react-three/drei'
import { Shape } from 'three'

export function useShirtMaterial() {
  // const fabricMetallic = useTexture(
  //   '/texture/office-fabric/office-fabric_metallic.png'
  // )
  // const fabricAO = useTexture('/texture/office-fabric/office-fabric_ao.png')
  // const fabricRoughness = useTexture(
  //   '/texture/office-fabric/office-fabric_roughness.png'
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
    <meshStandardMaterial
      color='#2a3247'
      // roughnessMap={fabricRoughness}
      // aoMap={fabricAO}
      // metalnessMap={fabricMetallic}
    />
  )

  return material
}

export function UBody() {
  const material = useShirtMaterial()
  return (
    <mesh position={[0, 0, 0]} castShadow receiveShadow>
      {material}
      <Geometry>
        <Base name='base' position={[0, 3, 0]} scale={[1, 0.5, 0.6]}>
          <sphereBufferGeometry args={[3]} />
        </Base>
        <Addition position={[0, 0, 0]} scale={[1, 1, 0.6]}>
          <cylinderBufferGeometry args={[3, 3, 6]} />
        </Addition>
        <Addition position={[0, -3, 0]} scale={[1, 0.5, 0.6]}>
          <sphereBufferGeometry args={[3]} />
        </Addition>
      </Geometry>
    </mesh>
  )
}

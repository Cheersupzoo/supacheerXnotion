import { forwardRef, useEffect, useRef } from 'react'

import { useGLTF } from '@react-three/drei'
import { RectAreaLight } from 'three'

export const M1 = forwardRef(
  ({ texture, children, ...props }: any, ref: any) => {
    const { nodes, materials } = useGLTF('/mbp-v1-pipe.glb') as any
    const rectLight = useRef<RectAreaLight>(null!)
    useEffect(() => {
      if (!rectLight.current) return

      rectLight.current.lookAt(0, 10, 1)
    }, [])
    return (
      <group {...props} dispose={null}>
        <rectAreaLight
          ref={rectLight}
          width={1}
          intensity={1.5}
          height={1}
          color={'#f3e7d3'}
          position={[0, 1, -1]}
        />
        {/* <mesh position={[0, 30, 5]}>
          <boxBufferGeometry args={[5,5,5]} />
          <meshBasicMaterial color={'blue'} />
        </mesh> */}
        <group
          ref={ref}
          position={[0, -0.43, -11.35]}
          rotation={[Math.PI / 2.4, 0, 0]}
        >
          <mesh
            geometry={nodes.back_1.geometry}
            material={materials.blackmatte}
          />
          <mesh
            receiveShadow
            castShadow
            geometry={nodes.back_2.geometry}
            material={materials.aluminium}
          />
          <mesh geometry={nodes.matte.geometry}>
            <meshStandardMaterial map={texture} toneMapped={false} />
          </mesh>
        </group>
        {children}
        <mesh
          geometry={nodes.body_1.geometry}
          material={materials.aluminium}
          material-color='#aaaaaf'
          material-envMapIntensity={0.2}
        />
        <mesh
          geometry={nodes.body_2.geometry}
          material={materials.blackmatte}
        />
      </group>
    )
  }
)

M1.displayName = 'M1'

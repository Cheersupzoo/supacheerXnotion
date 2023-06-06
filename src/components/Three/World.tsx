// import { useTexture } from '@react-three/drei'
import { Dodecahedron } from '@react-three/drei'

const World = () => {
  //   const grass = useTexture('/texture/wispy-grass/wispy-grass-meadow_albedo.png')
  //   const grassAO = useTexture('/texture/wispy-grass/wispy-grass-meadow_ao.png')
  //   const grassNormal = useTexture(
  //     '/texture/wispy-grass/wispy-grass-meadow_normal-dx.png'
  //   )
  //   const grassmetallic = useTexture(
  //     '/texture/wispy-grass/wispy-grass-meadow_metallic.png'
  //   )
  //   const grassRoughness = useTexture(
  //     '/texture/wispy-grass/wispy-grass-meadow_roughness.png'
  //   )
  return (
    <Dodecahedron
      args={[30, 3]}
      position={[0, -10 - 30, 0]}
      rotation={[1, 0, 1]}
      receiveShadow
    >
      <meshPhysicalMaterial
        flatShading
        clearcoat={0.7}
        clearcoatRoughness={0.3}
        color='#33ff11'
      />
    </Dodecahedron>
  )
}

export default World

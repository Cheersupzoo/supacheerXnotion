import FloatingPerson from '@/assets/2_zpng.png'
import { Html, useProgress } from '@react-three/drei'

export function Loader() {
  const { progress } = useProgress()
  return (
    <Html
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div style={{ width: '300px', height: '300px' }}>
        <img
          className='img-loader'
          src={FloatingPerson.src}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          color: 'var(--fg-color)'
        }}
      >
        loading {progress.toFixed(0)} %
      </div>
      <style jsx>{`
        .img-loader {
          transform: translatey(0px);
          animation: float 2s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translatey(0px);
          }
          50% {
            transform: translatey(-20px);
          }
          100% {
            transform: translatey(0px);
          }
        }
      `}</style>
    </Html>
  )
}

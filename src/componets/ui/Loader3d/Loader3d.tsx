import { Html, useProgress } from '@react-three/drei'
import cls from './Loader3d.module.scss'

const CanvasLoader = () => {
  const { progress } = useProgress()
  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <span className={cls.canvasLoader}></span>
      <p
        style={{
          fontSize: 14,
          color: '#f9dcf5',
          fontWeight: 800,
          marginTop: 40,
        }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default CanvasLoader

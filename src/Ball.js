import { useThree } from "@react-three/fiber"
import { useSphere, usePlane } from "@react-three/cannon"

export default function Ball({ args = [0.5, 32, 32] }) {
  const { viewport } = useThree()
  const [ref, api] = useSphere(() => ({ args: 0.5, mass: 1 }))
  // Invisible plane, if hit it respawns the ball
  usePlane(() => ({
    position: [0, -viewport.height, 0],
    rotation: [-Math.PI / 2, 0, 0],
    onCollide: () => {
      api.position.set(0, 0, 0)
      api.velocity.set(0, 10, 0)
    },
  }))
  return (
    <mesh ref={ref}>
      <sphereGeometry args={args} />
      <meshStandardMaterial />
    </mesh>
  )
}

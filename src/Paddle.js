import { useFrame } from "@react-three/fiber"
import { useBox } from "@react-three/cannon"

export default function Paddle({ args = [2, 0.5, 1] }) {
  const [ref, api] = useBox(() => ({ args, onCollide: () => console.log("PLAY PADDLE SOUND") }))
  
  useFrame((state) => {
    api.position.set((state.mouse.x * state.viewport.width) / 2, -state.viewport.height / 2, 0)
    api.rotation.set(0, 0, (state.mouse.x * Math.PI) / 5)
  })
  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  )
}
